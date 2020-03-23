<template>
  <div class="feature-view-header-bar">
    <a href="" class="link">
      <div class="logo">
        <GLogoWhite />
      </div>
    </a>
    <div class="title" ref="name">goodbuy</div>
  </div>
</template>

<script>
import GLogoWhite from '@/assets/logo/GLogoWhite'

export default {
  name: 'FeatureViewHeaderBar',
  components: {
    GLogoWhite,
  },
}
</script>

<style lang="scss" scoped>
.feature-view-header-bar {
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

.link {
  display: flex;
  align-items: center;
}
</style>
