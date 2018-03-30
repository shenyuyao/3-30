<template>
  <div id="app">
    <Ajax />
  </div>
</template>

<script>
import Ajax from './components/Ajax.vue'

export default {
  name: 'app',
  components: {
    Ajax
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
