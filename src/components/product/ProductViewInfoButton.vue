<template lang="html">
  <button @click="$emit('click')" data-cy="feedback-more-info-button">
    <slot name="title"></slot>
  </button>
</template>

<script>
export default {
  name: 'InfoButton',
}
</script>

<style lang="scss" scoped>
button {
  outline: none;
  border: 0;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  font-family: 'Open Sans', sans-serif;;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  padding: .5rem 1rem;
  border-radius: 28px;
  color: #FFFFFF;
  background-color: #272727;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.353);
}
</style>
