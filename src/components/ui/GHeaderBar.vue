<template lang="html">
  <div class="header-bar">
    <div class="logo" @click="onClickHome">
      <GLogoBlue />
    </div>
    <div class="title" :class="{ 'title__desktop': desktop }" ref="name">goodbuy</div>
    <div class="signup" v-if="!$auth.isAuthenticated" @click="onClickLogin">
      Sign In
      <br>
      Log In
    </div>
    <ProfileLogo
      v-if="$auth.isAuthenticated && this.$router.currentRoute.name != 'profile'" 
      class="profile_button"
      @click="onClickProfile"
    />
    <button
      v-if="$auth.isAuthenticated && this.$router.currentRoute.name == 'profile'"
      class="logout_button"
      @click="onClickLogout"
    >
      Log Out
    </button>

  </div>
</template>

<script>
import GLogoBlue from '@/assets/logo/GLogoBlue'
import ProfileLogo from '@/assets/profile/user.svg'

export default {
  name: 'HeaderBar',
  components: {
    GLogoBlue,
    ProfileLogo,
  },
  props: {
    desktop: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    onClickLogin() {
      this.$auth.loginWithRedirect({
        redirect_uri:  `${process.env.VUE_APP_BASE_URL}feature`
      })
    },
    onClickProfile() {
      this.$router.push("profile")
    },
    onClickLogout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    },
    onClickHome() { 
      this.$router.push("feature")
    }
  }
}
</script>

<style lang="scss" scoped>
.header-bar {
  padding: .3rem;
  overflow: hidden;
  background-color: #F6FBFC;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .logo {
    svg {
      width: 40px;
      height: 40px;
    }
  }
  .signup {
    color: #272727;
  }

  .title {
    font-family: 'Avenir';
    color: #272727;
    font-size: 12vw;

    &__desktop {
      font-size: 3vw;
    }
  }

  .profile_button {
    color: #272727;
  }
}
</style>
