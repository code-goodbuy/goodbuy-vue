<template lang="html">
  <div class="info-box">
    <div>
      <span>Brand:</span>
      <span>{{ brand }}</span>
    </div>
    <div>
      <span>Category:</span>
      <span>{{ category }}</span>
    </div>
    <div>
      <span>Barcode Number:</span>
      <span>{{ code }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoBox',
  props: {
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    code: {
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
