<template lang="html">
  <div class="product-screen">
    {{ $route.params.code }}
    <button @click="goBack">Back</button>
  </div>
</template>

<script>
export default {
  name: 'ProductScreen',
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.product-screen {

}
</style>
