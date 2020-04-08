<template>
    <div class="feature-view">
        <FeatureViewHeaderBar />
        <FeatureViewContent />
    </div>
</template>

<script>
import FeatureViewHeaderBar from './FeatureViewHeaderBar'
import FeatureViewContent from './FeatureViewContent'

export default {
    name: 'FeatureView',
    components: {
        FeatureViewHeaderBar,
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
