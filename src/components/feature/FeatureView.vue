<template>
  <div class="feature-view">
    <HeaderBar />
    <FeatureViewContent />
  </div>
</template>

<script>
import HeaderBar from '@/components/ui/GHeaderBar.vue'
import FeatureViewContent from './FeatureViewContent'

export default {
  name: 'FeatureView',
  components: {
    HeaderBar,
    FeatureViewContent
  }
}
</script>

<style lang="scss" scoped>
.feature-view {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
</style>
