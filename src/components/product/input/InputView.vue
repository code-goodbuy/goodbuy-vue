<template lang="html">
  <div class="input-view">
    <div class="header">
      <button @click="goBack">back</button>
    </div>
    <div class="content">
    </div>
    <div class="footer">
      <GInput placeholder="Name" />
      <GInput placeholder="Brand" />
      <GSelect name="Category"/>
      <GInput placeholder ="barcode" value="154546681" readOnly/>
      <GButton class="back-button" @click="scanAgain">
        <slot slot="title">Scan again</slot>
      </GButton>
    </div>
  </div>
</template>

<script>
import GInput from '@/components/ui/GInput.vue'
import GButton from '@/components/ui/GButton.vue'
import GSelect from '@/components/ui/GSelect.vue'

export default {
  name: 'InputView',
  components: {
    GInput,
    GButton,
    GSelect,
  },
  methods: {
    goBack() {
      this.$router.back()
    },
    scanAgain() {
      this.$router.push({
        name: 'scanner',
        params: { firstVisit: false },
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.input-view {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .header {

  }
  .footer {
    width: 100%;

    margin-top: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    div {
      margin: 1rem 0;
    }
    button {
      margin: 2rem;
      align-self: center;
    }
  }
}
</style>
