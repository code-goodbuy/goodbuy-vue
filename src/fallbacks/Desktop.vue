<template>
  <div class="desktop">
    <HeaderBar data-cy="desktop-header-bar" desktop/>
    <DesktopIcon class="desktop-header-icon"/>
    <GTitle class="desktop-header-title" desktop>
      <slot slot="title">Use your smartphone</slot>
    </Gtitle>
    <div class="desktop-content">
      Sorry, our application currently only works on mobile devices
      but you can easily check out our
      <a
        class="insta-link"
        href="https://www.instagram.com/goodbuy.official/"
        target="_blank"
      >
        instagram
      </a>.
      See you soon on your smartphone!
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/ui/GHeaderBar.vue'
import DesktopIcon from '@/assets/common/DesktopIcon.vue'
import GTitle from '@/components/ui/GTitle.vue'

export default {
  name: 'Desktop',
  components: {
    HeaderBar,
    DesktopIcon,
    GTitle,
  }
}
</script>

<style lang="scss" scoped>
.desktop {
  &-header-icon {
    display: block;
    margin: auto;
    width: 25vw;
  }

  &-header-title {
    margin-top: 3rem;
  }

  &-content {
    margin-top: 2rem;
    padding: 0 25%;

    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: normal;
    text-align: center;
    font-size: 1.5vw;

    .insta-link {
      text-decoration: none;
      color: #90D2D9;
    }
  }
}
</style>
