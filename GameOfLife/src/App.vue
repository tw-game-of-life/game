<template>
  <div id="app">
    <Game :row="20" :col="20"></Game>
  </div>
</template>

<script>
  import Game from './components/Game.vue'

  export default {
    name: 'App',
    components: {Game}
  }
</script>

<style>

</style>
