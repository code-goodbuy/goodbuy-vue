<template>
  <div class="g-text-header">
    <div class="container">
      <h1>
        <slot name="title" />
      </h1>
    </div>
    <div class="content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'GTextHeader',
}
</script>

<style lang="scss" scoped>
.g-text-header {
  .container {
    display: inline-block;
    position: relative;
    h1 {
      font-size: 30px;
      font-family: 'Work Sans', sans-serif;
      text-align: left;
      position: relative;
      margin: 0;
      margin-left: 1rem;
      margin-bottom: .25rem;
      z-index: 1;
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
  }
  .content {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    margin: 1rem 1rem 0 1rem;
  }
}
</style>
