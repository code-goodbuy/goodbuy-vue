import { getInstance } from "./index";

export const authGuard = (to, from, next) => {
  const authService = getInstance();
  // force_log_in
// check_authentification_if_not_redirect_to_login
  // check permission to next page if true next else redirect
  //if_authenticated_next_else_redirect_to_login
  const fn = () => {
    if (authService.isAuthenticated) {
      return next();
    }

    authService.loginWithRedirect({ appState: { targetUrl: to.fullPath } });
  };

  if (!authService.loading) {
    return fn();
  }

  authService.$watch("loading", loading => {
    if (loading === false) {
      return fn();
    }
  });
};
