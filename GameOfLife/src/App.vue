<template>

  <div id="app" style="width: 100%;height: 100%;position: relative">

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
