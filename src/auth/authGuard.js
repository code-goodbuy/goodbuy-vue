import { getInstance } from "./index";

export const authGuard = (to, from, next) => {
  const authService = getInstance();

  const force_log_in = () => {
    if (authService.isAuthenticated) {
      return next();
    }

    authService.loginWithRedirect({ appState: { targetUrl: to.fullPath } });
  };

  if (!authService.loading) {
    return force_log_in();
  }

  authService.$watch("loading", loading => {
    if (loading === false) {
      return force_log_in();
    }
  });
};
