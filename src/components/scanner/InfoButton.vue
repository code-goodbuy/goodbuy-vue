<template lang="html">
  <div
    class="info-button"
    @click="$emit('showInfo')"
  >i</div>
</template>

<script>
export default {
  name: 'InfoButton'
}
</script>

<style lang="scss" scoped>
.info-button {
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

  z-index: 1;
}
</style>
