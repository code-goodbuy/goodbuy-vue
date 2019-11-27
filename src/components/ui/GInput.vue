<template>
  <div class="g-input">
    <div
      class="container"
    >
      <h1>
        <input
          :readOnly="readOnly"
          :placeholder="placeholder"
          v-bind:value="value"
          v-on:input="$emit('input', $event.target.value)"
          v-autowidth="{maxWidth: width}"
        />
      </h1>
    </div>
  </div>
</template>

<script>
import VueScreenSize from 'vue-screen-size'

export default {
  name: 'GInput',
  mixins: [VueScreenSize.VueScreenSizeMixin],
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: false,
    },
    readOnly: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      name: '',
      width: ''
    }
  },
  mounted() {
    this.width = `${this.$vssWidth - 40}px`
  },
}
</script>

<style lang="scss" scoped>
.g-input {
  .container {
    display: inline-block;
    position: relative;

    h1 {
      position: relative;
      margin: 0;
      margin-bottom: .25rem;
      z-index: 1;
      line-height: 35px;
      input {
        position: relative;
        background: transparent;
        border: none;
        outline: none;

        font-size: 8vw;
        font-family: 'Work Sans', sans-serif;
        font-weight: 600;
        text-align: left;

        position: relative;
        margin: 0;
        margin-left: 1rem;
      }
    }
    &:after {
      content: "";
      display: inline-block;
      position: absolute;
      width: 102%;
      height: .8rem;
      bottom: 0;
      background: #90D2D9;
      opacity: 80%;
    }
  }
}
</style>
