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
        Who are we?
      </slot>
      <slot slot="content">
        We are a group of students that want to make a change in the way we consume groceries. Our logo stands for the butterfly effect as we believe that a small habit change here can result in a big change in the lives of people and the health of the planet on the other side of the world. We are Goodbuy.
      </slot>
    </GTextHeader>

    <GTextHeader class="text-box">
      <slot slot="title">
        Our mission
      </slot>
      <slot slot="content">
        Currently, it takes to much time and effort to inform yourself in order to consume sustainable and ethical groceries. This is why we want to make the ethical and sustainable background of products easily accessible to everyone. As this is a big goal, we want to start by focusing on the 10 biggest corporations. If you scan a grocery item you will receive feedback as to whether it belongs to one of the biggest 10 corporations or not. These have the most influence over the market and therefore the biggest impact on people and the planet.
      </slot>
    </GTextHeader>

    <GButton class="btn-container" @click="onClickScanItem">
      <slot slot="title">
        Scan an item
      </slot>
    </GButton>

  </div>
</template>

<script>
import GButton from '@/components/ui/GButton'
import GLogoWhite from '@/assets/logo/GLogoWhite'
import GTextHeader from '@/components/ui/GTextHeader'

export default {
  name: 'IntroView',
  components: {
    GButton,
    GLogoWhite,
    GTextHeader,
  },
  methods: {
    onClickScanItem() {
      this.$router.push({
        name: 'scanner',
        params: { firstVisit: true },
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.welcome-screen {
  .header {
    padding: .3rem;
    overflow: hidden;
    background-color: #272727;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .logo {
      position: absolute;
      svg {
        width: 40px;
        height: 40px;
      }
    }
    .title {
      margin: auto;
      text-align: center;
      font-family: 'Avenir';
      color: white;
      font-size: 12vw;
    }
  }
  .text-box {
    margin-top: 1rem;
  }
  .btn-container {
    position: fixed;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -50%);
    margin: 0 auto;
  }
}
</style>
