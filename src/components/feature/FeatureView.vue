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
