<template>
  <div class="g-text-header">
    <div
      class="container"
      :class="{
        'container--centered': centered,
        'container--big': big,
      }">
      <h1>
        <slot name="title" />
      </h1>
    </div>
    <div class="content" :class="{'content--big': big}">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'GTextHeader',
  props: {
    centered: {
      type: Boolean,
      default: false,
    },
    big: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.g-text-header {
  .container {
    display: inline-block;
    position: relative;

    &--centered {
      width: 65%;
      h1 {
        text-align: right !important;
      }
    }
    &--big {
      h1 {
        font-weight: 600 !important;
        font-size: 60px !important;
        line-height: 48px !important;
      }
    }
    h1 {
      font-size: 30px;
      font-family: 'Work Sans', sans-serif;
      text-align: left;
      position: relative;
      margin: 0;
      margin-left: 1rem;
      margin-bottom: .25rem;
      z-index: 1;
      line-height: 35px;
      line-height: 100%;
    }
    &:after {
      content: "";
      display: inline-block;
      position: absolute;
      width: 102%;
      height: .8rem;
      bottom: 0;
      background: #90D2D9;
      opacity: 80%;
    }
  }
  .content {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    margin: 1rem 1rem 0 1rem;

    &--big {
      font-size: 20px !important;
      line-height: 27px !important;
      text-align: center !important;
    }
  }
}
</style>
