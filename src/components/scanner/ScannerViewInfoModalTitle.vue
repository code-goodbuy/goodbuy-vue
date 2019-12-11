<template lang="html">
  <GTitle>
    <slot slot="title">
      How it works
    </slot>
  </GTitle>
</template>

<script>
import GTitle from '@/components/ui/GTitle'

export default {
  name: 'ScannerViewInfoModalTitle',
  components: {
    GTitle,
  }
}
</script>
