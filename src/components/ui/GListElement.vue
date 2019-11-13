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
    font-family: 'Work Sans Semibold', sans-serif;
    line-height: 35px;
    margin-left: 1rem;
  }

  .title {
    font-size: 20px;
    font-family: 'Work Sans Medium', sans-serif;
    line-height: 23px;
    margin-left: .3rem;
  }

  .content {
    font-size: 14px;
    font-family: 'Work Sans Semibold', sans-serif;
    line-height: 19px;
    margin-left: 2rem;
    color: #797979;
  }
}
</style>
