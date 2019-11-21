<template lang="html">
  <div class="overlay" />
</template>

<script>
export default {
  name: 'ScannerViewOverlay'
}
</script>

<style lang="scss" scoped>
.overlay:after{
  content:'';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  max-width: 80%;
  width: 10000px;
  padding: 0 -1rem;
  height: 150px;

  box-shadow: 0px 0px 0px 2000px black;
  opacity: 0.5; /* Standard compliant browsers */
  -moz-opacity: 0.5; /* Firefox and Mozilla browsers */
  -webkit-opacity: 0.5; /* WebKit browser e.g. Safari */
  filter: alpha(opacity=50); /* For IE8 and earlier */
  border-radius: 15px;
  border: solid white;
}
</style>
