<template lang="html">
  <div class="header-bar">
    <div class="logo" @click="onClickHome">
      <GLogoWhite />
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
import GLogoWhite from '@/assets/logo/GLogoWhite'
import ProfileLogo from '@/assets/profile/user.svg'

export default {
  name: 'HeaderBar',
  components: {
    GLogoWhite,
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

#app > div > div.header-bar > button {
  color: white;
}

.header-bar {
  padding: .3rem;
  overflow: hidden;
  background-color: #272727;
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
    color: white;
  }

  .title {
    font-family: 'Avenir';
    color: white;
    font-size: 12vw;

    &__desktop {
      font-size: 3vw;
    }
  }

  .profile_button {
    color: white;
  }

  .logout_button {
    color: red;
  }
}
</style>
