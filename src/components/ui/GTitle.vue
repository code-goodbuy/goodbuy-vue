<template>
  <div class="g-title">
    <div
      class="container"
      :class="{
        'container--centered': centered,
        'container--big': big,
        'container--long-double-line': long,
        'container--long-single-line': truncate,
      }">
      <h1>
        <slot name="title" />
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GTitle',
  props: {
    centered: {
      type: Boolean,
      default: false,
    },
    big: {
      type: Boolean,
      default: false,
    },
    long: {
      type: Boolean,
      default: false,
    },
    truncate: {
      type: Boolean,
      default: false,
    },
  }
}
</script>

<style lang="scss" scoped>
.g-title {
  margin-right: 1rem;
  .container {
    display: inline-block;
    position: relative;

    h1 {
      font-size: 8vw;
      font-family: 'Work Sans', sans-serif;
      font-weight: 600;
      text-align: left;
      position: relative;
      margin: 0;
      margin-left: 1rem;
      margin-bottom: .25rem;
      z-index: 1;
      line-height: 35px;
    }
    &:after {
      content: "";
      display: inline-block;
      position: absolute;
      width: 100%;
      height: .8rem;
      bottom: 0;
      background: #90D2D9;
      opacity: 80%;
    }
    &--centered {
      width: 65%;
      h1 {
        text-align: right;
      }
    }
    &--big {
      h1 {
        font-weight: 600;
        font-size: 16vw;
        line-height: 35px;
      }
    }
    &--long-double-line {
      max-width: 100%;
      h1 {
        font-size: 7vw;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-height: 25px;     /* fallback */
        max-height: 50px;      /* fallback */
        -webkit-line-clamp: 2; /* number of lines to show */
        -webkit-box-orient: vertical;
      }
    }
    &--long-single-line {
      max-width: 100%;
      h1 {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-height: 25px;     /* fallback */
        max-height: 25px;      /* fallback */
        -webkit-line-clamp: 1; /* number of lines to show */
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
