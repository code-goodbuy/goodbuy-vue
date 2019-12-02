<template>
  <div class="g-text-header">
    <div
      class="title-container"
      :class="{
        'title-container--centered': centered,
        'title-container--big': big,
      }">
      <h1>
        <slot name="title" />
      </h1>
    </div>
    <div
      class="content-container"
      :class="{
        'content-container--big': big,
        'content-container--toggle': isToggled
      }"
      @click="onClickToggleContent"
    >
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'GTextHeader',
  props: {
    centered: {
      type: Boolean,
      default: false,
    },
    big: {
      type: Boolean,
      default: false,
    },
    allowtoggle: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      toggle: true
    }
  },
  computed: {
    isToggled() {
      if (!this.allowtoggle) {
        return false
      }
      return this.toggle
    }
  },
  methods: {
    onClickToggleContent() {
      if (this.allowtoggle) {
        this.toggle = !this.toggle
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.g-text-header {
  margin-right: 1rem;
  .title-container {
    display: inline-block;
    position: relative;

    h1 {
      font-size: 8vw;
      font-family: 'Work Sans', sans-serif;
      font-weight: 600;
      text-align: left;
      position: relative;
      margin: 0;
      margin-left: 1rem;
      margin-bottom: .25rem;
      z-index: 1;
      line-height: 35px;
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

    &--centered {
      width: 65%;

      h1 {
        text-align: right;
      }
    }

    &--big {
      h1 {
        font-weight: 600;
        font-size: 16vw;
        line-height: 35px;
      }
    }
  }
  .content-container {
    font-family: "Open Sans", sans-serif;
    font-size: 3.5vw;
    line-height: 16px;
    margin: 1rem 1rem 0 1rem;

    &--big {
      font-size: 5vw;
      line-height: 20px;
      text-align: center;
      margin: 1.5rem 1rem;
    }

    &--toggle {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      line-height: 16px;     /* fallback */
      max-height: 48px;      /* fallback */
      -webkit-line-clamp: 3; /* number of lines to show */
      -webkit-box-orient: vertical;
    }
  }
}
</style>
