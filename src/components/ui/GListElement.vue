<template lang="html">
  <div class="g-list-element">
    <div class="">
      <span class="index">
        <slot name="index"></slot>
      </span>
      <span class="title">
        <slot name="title"></slot>
      </span>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GListElement',
}
</script>

<style lang="scss" scoped>
.g-list-element {
  .index {
    font-size: 30px;
    font-family: 'Work Sans', sans-serif;
    font-weight: 600;
    line-height: 35px;
    margin-left: 1rem;
  }

  .title {
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
    font-size: 6vw;
    line-height: 23px;
    margin-left: .3rem;
  }

  .content {
    display: table-cell;
    font-size: 15px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    line-height: 20px;
    padding: 0 2rem;
    color: #797979;
  }
}
</style>
