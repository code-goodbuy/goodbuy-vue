<template lang="html">
  <div class="loading-animation">
    <GLogoBlack v-if="!whiteLogo"/>
    <GLogoWhite v-else/>
    <div class="description">
      <slot name="description"></slot>
    </div>
  </div>
</template>

<script>
import GLogoBlack from '@/assets/logo/GLogoBlack.vue'
import GLogoWhite from '@/assets/logo/GLogoWhite.vue'

export default {
  name: 'GLoadingAnimation',
  components: {
    GLogoBlack,
    GLogoWhite,
  },
  props: {
    whiteLogo: {
      type: Boolean,
      default: false,
    },
  }
}
</script>

<style lang="scss" scoped>
.loading-animation {
  display: flex;
  flex-direction: column;
  align-items: center;

  .description {
    margin-top: 1rem;
    z-index:2;
    color: white;
  }

  svg {
    height: 60px;
    width: 60px;
    z-index: 2;
  }

  #logo {
    animation: test 4s linear infinite;
  }

  @keyframes test {
    5% {
      transform: rotateX(0deg);
    }
    25% {
      transform: rotateX(180deg);
    }
    45% {
      transform: rotateX(360deg);
    }
    55% {
      transform: rotateX(360deg);
    }
    75% {
      transform: rotateY(180deg);
    }
    95% {
      transform: rotateY(360deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
}
</style>
