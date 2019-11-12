<template>
  <div id="app">
    <WelcomeScreen/>
  </div>
</template>

<script>
import WelcomeScreen from '@/components/welcome_screen/WelcomeScreen'

export default {
  name: 'app',
  components: {
    WelcomeScreen
  }
}
</script>

<style>
body { margin: 0; }
#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
