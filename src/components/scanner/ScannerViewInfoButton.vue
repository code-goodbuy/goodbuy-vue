<template lang="html">
  <div
    class="info-button"
    @click="$emit('onClickInfoButton')"
  >i</div>
</template>

<script>
export default {
  name: 'ScannerViewInfoButton'
}
</script>

<style lang="scss" scoped>
.info-button {
  z-index: 3;
  height: 23px;
  width: 23px;
  position: absolute;
  top: 10px;
  left: 10px;

  position: absolute;
  border-radius: 50%;
  border: 2px solid white;
  color: white;

  display: flex;
  align-content: center;
  justify-content: center;
  font-size: 20px;
}
</style>
