<template lang="html">
  <GTitle>
    <slot slot="title">
      Why register?
    </slot>
  </GTitle>
</template>

<script>
import GTitle from '@/components/ui/GTitle'

export default {
  name: 'IntroViewModalTitle',
  components: {
    GTitle,
  }
}
</script>
