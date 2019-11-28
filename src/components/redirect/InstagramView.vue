<template lang="html">
  <div class="instagram-view">
    <div class="header">
      <div class="logo">
        <GLogoWhite />
      </div>
      <div class="title">goodbuy</div>
    </div>

    <GTextHeader class="text-box">
      <slot slot="title">
        Before you start
      </slot>
      <slot slot="content">
        <big>
          Unfortunately, the build in instagram browser doesn't support camera access. Please open our app on your phone's dedicated browser.
          </br>
          </br>
          <b>iOS:</b>
          </br>
          Please use the safari browser
          </br>
          </br>
          <b>Android:</b>
          </br>
          Every browser should work just fine
        </big>
        <div class="link">
          <a href="goodbuy.netlify.com">goodbuy.netlify.com</a>
        </div>
      </slot>
    </GTextHeader>
  </div>
</template>

<script>
import GLogoWhite from '@/assets/logo/GLogoWhite.vue'
import GTextHeader from '@/components/ui/GTextHeader.vue'

export default {
  name: 'InstagramView',
  components: {
    GLogoWhite,
    GTextHeader,
  }
}
</script>

<style lang="scss" scoped>
.instagram-view {
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
  .link {
    a {
      font-size: 6vw;
      color: #90D2D9;
    }
    margin-top: 2rem;
    text-align: center;
  }
}
</style>
