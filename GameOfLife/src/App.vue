<template>
  <div id="app">

    <Game :row="3" :col="3"></Game>
  </div>
</template>

<script>
  import Game from './components/Game.vue'

export default {
  name: 'App',


  components:{Game}
}
</script>

<style>

</style>
