<template lang="html">
  <div class="intro-view-content">
    <GTextHeader allowtoggle class="text-box">
      <slot slot="title">
        Who are we?
      </slot>
      <slot slot="content">
        <span data-cy="intro-content-text-1">
          We are a group of students that want to make a change in the way we consume groceries. Our logo stands for the butterfly effect as we believe that a small habit change here can result in a big change in the lives of people and the health of the planet on the other side of the world. We are Goodbuy.
        </span>
      </slot>
    </GTextHeader>

    <GTextHeader allowtoggle class="text-box">
      <slot slot="title">
        Our mission
      </slot>
      <slot slot="content">
        <span data-cy="intro-content-text-2">
          Currently, it takes to much time and effort to inform yourself in order to consume sustainable and ethical groceries. This is why we want to make the ethical and sustainable background of products easily accessible to everyone. As this is a big goal, we want to start by focusing on the 10 biggest corporations. If you scan a grocery item you will receive feedback as to whether it belongs to one of the biggest 10 corporations or not. These have the most influence over the market and therefore the biggest impact on people and the planet.
        </span>
      </slot>
    </GTextHeader>
  </div>
</template>

<script>
import GTextHeader from '@/components/ui/GTextHeader.vue'

export default {
  name: 'IntroViewContent',
  components: {
    GTextHeader,
  }
}
</script>

<style lang="scss" scoped>
.intro-view-content {
  .text-box {
    margin-top: 1rem;
  }
}
</style>
