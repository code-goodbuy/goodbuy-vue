<template lang="html">
  <button @click="$emit('click')">
    <slot name="title"></slot>
  </button>
</template>

<script>
export default {
  name: 'GButton',
}
</script>

<style lang="scss" scoped>
button {
  border: 0;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  font-family: 'Work Sans', sans-serif;;
  font-size: 20px;
  font-weight: 500;
  padding: .5rem 1rem;
  border-radius: 28px;
  color: #272727;
  background-color: #90D2D9;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.353);
}
</style>
