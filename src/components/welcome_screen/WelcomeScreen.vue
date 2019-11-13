<template lang="html">
  <div class="welcome-screen">

    <div class="header">
      <div class="logo">
        <GLogoWhite />
      </div>
      <div class="title">goodbuy</div>
    </div>

    <GTextHeader class="text-box">
      <slot slot="title">
        What do we do ?
      </slot>
      <slot slot="content">
        We want to make the ethical and sustainable background of product easily accessible to everyone.
      </slot>
    </GTextHeader>

    <GTextHeader class="text-box">
      <slot slot="title">
        Why ?
      </slot>
      <slot slot="content">
        Currently, it takes to much time and effort to inform yourself in order to consume sustainable and ethical.
      </slot>
    </GTextHeader>

    <GButton class="btn-container" @click="pushScanner">
      <slot slot="title">
        Let's scan an item
      </slot>
    </GButton>

  </div>
</template>

<script>
import GLogoWhite from '../../assets/logo/GLogoWhite'
import GTextHeader from '../ui/GTextHeader'
import GButton from '../ui/GButton'

export default {
  components: {
    GTextHeader,
    GLogoWhite,
    GButton,
  },
  methods: {
    pushScanner() {
      this.$router.push('scanner')
    }
  }
}
</script>

<style lang="scss" scoped>
.welcome-screen {
  .header {
    padding: 1rem;
    overflow: hidden;
    background-color: #272727;
    .logo {
      position: absolute;
      svg {
        width: 60px;
        height: 60px;
      }
    }
    .title {
      text-align: center;
      font-family: 'Avenir';
      color: white;
      font-size: 45px;
    }
  }
  .text-box {
    margin-top: 3rem;
  }
  .btn-container {
    position: fixed;
    left: 50%;
    bottom: 1rem;
    transform: translate(-50%, -50%);
    margin: 0 auto;
  }
}
</style>
