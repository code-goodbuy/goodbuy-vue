<template lang="html">
  <div class="info-box">
    <div>
      <span>Brand:</span>
      <span>{{ brand }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoSlideUpInfoBox',
  props: {
    brand: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.info-box {
  margin: 1rem;
  div {
    margin-top: 1rem;
    font-family: "Open Sans", sans-serif;
    span:first-of-type {
      font-weight: 600;
      font-size: 15px;
      line-height: 20px;
    }
    span:last-of-type {
      margin-left: .3rem;
      font-weight: 400;
      font-size: 15px;
      line-height: 20px;
    }
  }
}
</style>
