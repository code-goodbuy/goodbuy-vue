<template>
  <div class="g-text-header">
    <div class="select-container">
      <select
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
        v-autowidth="{maxWidth: width, comfortZone: 20}"
      >
        <option selected disabled>Category</option>
        <option
          v-for="(option, index) in options"
          :key="index"
        >
          {{ option }}
        </option>
      </select>
      <DropdownIcon />
    </div>
  </div>
</template>

<script>
import DropdownIcon from '@/assets/common/DropdownIcon.vue'
import VueScreenSize from 'vue-screen-size'

export default {
  name: 'GSelect',
  mixins: [VueScreenSize.VueScreenSizeMixin],
  components: {
    DropdownIcon,
  },
  props: {
    value: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    }
  },
  computed: {
    width() {
      return `${this.$vssWidth - 60}px`
    }
  },
}
</script>

<style lang="scss" scoped>
.g-text-header {
  display: inline-block;
  position: relative;

  .select-container {
    position: relative;
    padding: 0px;
    margin: 0;
    margin-bottom: .25rem;
    margin-left: 1rem;

    select {
      z-index: 1;
      line-height: 35px;

      position: relative;
      background: transparent;
      border: none;
      outline: none;

      font-size: 8vw;
      font-family: 'Work Sans', sans-serif;
      font-weight: 600;
      text-align: left;
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
</style>
