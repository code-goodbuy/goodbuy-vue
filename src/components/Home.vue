<template>
  <div class="home">
    <div class="header">
      <div class="title">Goodbuy</div>
    </div>
    <scanner
      @updateBarcode="updateBarcode"
    />
    <div>{{ barcode }}</div>
    <button @click="barcode=''">Clear Output</button>
  </div>
</template>

<script>
import Scanner from './Scanner'

export default {
  name: 'home',
  data() {
    return {
      barcode: ''
    }
  },
  components: {
    Scanner
  },
  methods: {
    updateBarcode(barcode) {
      this.barcode = barcode
    }
  }
}
</script>

<style lang="scss">
.home {
  overflow-x: hidden;
  .header {
    overflow: hidden;
    background-color: green;
    padding: 20px 10px;
    .title {
      font-size: 40px;
    }
  }
  .scanner {
    display: flex;
    .viewport {
/*      padding: 0;
      margin: 0;
*/    }
  }
}
</style>
