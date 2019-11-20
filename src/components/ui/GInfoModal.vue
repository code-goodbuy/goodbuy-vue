<template>
  <div class="modal">
    <GTextHeader class="text-box">
      <slot slot="title">
        How does it work ?
      </slot>
    </GTextHeader>

    <GListElement class="list-box">
      <slot slot="index">1.</slot>
      <slot slot="title">Find your item to scan.</slot>
      <slot slot="content">Choose the item you would like to scan.</slot>
    </GListElement>

    <GListElement class="list-box">
      <slot slot="index">2.</slot>
      <slot slot="title">Scan the item.</slot>
      <slot slot="content">Hold the EAN code into the camera to scan.</slot>
    </GListElement>

    <GListElement class="list-box">
      <slot slot="index">3.</slot>
      <slot slot="title">Get Feeback!</slot>
      <slot slot="content">After we found your item you will get feedback on it.</slot>
    </GListElement>

    <div class="btn-container">
      <GButton @click="test">
        <slot slot="title">Let's Go!</slot>
      </GButton>
    </div>

  </div>
</template>

<script>
import GButton from './GButton'
import GTextHeader from '../ui/GTextHeader'
import GListElement from '../ui/GListElement'

export default {
  name: 'Modal',
  components: {
    GButton,
    GTextHeader,
    GListElement,
  },
  methods: {
    test() {
      this.$emit('closeModal')
    }
  }
};
</script>


<style lang="scss" scoped>
  .modal {
    padding: 2rem 0;
    margin: 70px 20px;
    border-radius: 10px;
    background-color: white;

    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .btn-container {
      margin: 0 auto;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, -50%);
    }
    .list-box {
      margin: 1rem 0;
    }
  }
</style>
