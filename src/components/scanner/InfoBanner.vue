<template lang="html">
  <div class="info-banner">
    Point you camera at a barcode
  </div>
</template>

<script>
export default {
  name: 'InfoBanner'
}
</script>

<style lang="scss" scoped>
.info-banner {
  position: absolute;
  bottom: 10px;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);

  padding: .5rem 0;

  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;

  text-align: center;
  white-space: nowrap;
  background-color: #90D2D9;
}
</style>
