<template>
  <div class="intro-view-modal">
    <div class="modal-header">Create an account!</div>
    <ModalTitle />

    <GListElement class="list-box">
      <slot slot="index">1.</slot>
      <slot slot="title">Scanhistory</slot>
      <slot slot="content">Have your personal scanhistory!</slot>
    </GListElement>

    <GListElement class="list-box">
      <slot slot="index">2.</slot>
      <slot slot="title">Blacklist</slot>
      <slot slot="content">You decide what corporates you want to boycot and which not!</slot>
    </GListElement>

    <GListElement class="list-box">
      <slot slot="index">3.</slot>
      <slot slot="title">Participate</slot>
      <slot slot="content">Be a active part of the community an add products</slot>
    </GListElement>

    <div class="guest" @click="$emit('closeModal')">Continue as Guest</div>
    <div class="register" @click="onClickRegister()">Register</div>
    <div class="login">Already have an account?
      <div class="login-btn" @click="onClickLogin()">Login here</div>
    </div>
  </div>
</template>

<script>
import GListElement from '@/components/ui/GListElement'
import IntroViewModalTitle from './IntoViewModalTitle.vue'

export default {
  name: 'IntroViewModal',
  components: {
    GListElement,
    'ModalTitle': IntroViewModalTitle,
  },
  methods: {
    onClickLogin() {
      this.$auth.loginWithRedirect({
        redirect_uri: `${process.env.VUE_APP_BASE_URL}feature`
      })
    },
    onClickRegister() {
      this.$auth.loginWithRedirect({
        redirect_uri: `${process.env.VUE_APP_BASE_URL}`
      })
    }
  },
  created() {
    this.$emit('isRegistered', !this.$auth.isAuthenticated);
  },
  updated() {
    if (this.$auth.isAuthenticated) {
      this.$router.push('feature');
    }
  }
}
</script>


<style lang="scss" scoped>
.intro-view-modal {
  padding: 1rem 0;
  margin: 40px 30px;
  border-radius: 10px;
  background-color: white;

  position: absolute;
  z-index: 4;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .list-box {
    margin: 3vw 0;
  }
  .modal-header {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    margin-top: 1rem;
  }
  .guest {
    font-size: 0.8rem;
    text-align: start;
  }
  .register {
    font-size: 1.25rem;
    text-align: end;
    font-weight: 600;
  }
  .login {
    font-size: 1rem;
    .login-btn {
      color: blue;
    }
  }
}
</style>
