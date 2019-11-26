<template>
  <div class="g-text-header">
    <div
      class="container"
    >
      <h1>
        <select>
          <option selected disabled>Category</option>
          <option>Food</option>
          <option>Drink</option>
        </select>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GTextHeader',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      width: ''
    }
  },
}
</script>

<style lang="scss" scoped>
.g-text-header {
  .container {
    display: inline-block;
    position: relative;

    h1 {
      position: relative;
      margin: 0;
      margin-bottom: .25rem;
      z-index: 1;
      line-height: 35px;
      select {
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
