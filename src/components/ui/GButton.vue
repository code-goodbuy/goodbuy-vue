<template lang="html">
  <div class="g-button">
    <button
      @click="$emit('click')"
      class="button"
      :class="{'black': black}"
    >
      <slot name="title"></slot>
    </button>
    <div v-if="feedback" class="feedback">
      Was our feedback correct?
      <button
        style="border-color: gray;"
        @click="$emit('onClickFeedback', true)"
      >
        +
      </button>
      <button
        style="border-color: gray; margin-left: .3rem;"
        @click="$emit('onClickFeedback', false)"
      >
        -
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GButton',
  props: {
    black: {
      type: Boolean,
      default: false,
    },
    feedback: {
      type: Boolean,
      default: false,
    },
  }
}
</script>

<style lang="scss" scoped>
.g-button {
  display: flex;
  vertical-align: center;
  justify-content: center;
  flex-direction: column;

  .button {
    outline: none;
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

  .black {
    color: #ffffff;
    background-color: #272727;
  }

  .feedback {
    margin-top: 1rem;
    margin-left: -100%;
    margin-right: -100%;
    text-align: center;
  }
}
</style>
