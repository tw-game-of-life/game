<template>
  <div class="game">
    <button @click="next">next</button>

    <table  >
      <tbody>
        <tr v-for="rows in grid">
          <td :class="cell.state === 0 ? 'dead' : 'alive'" v-for="cell in rows" ></td>
        </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
import LifeGame from '../lib/lifeGame.js'

export default {
  name: 'Game',
  props: [ 'row' , 'col' ],
  data () {
    return {
      grid:[],
      game:{}
    }
  },
  created() {
    this.game = new LifeGame(this.row,this.col);
    this.grid = this.game.init()
    console.log(this.col)
  },
  methods:{
    next(){
      const newGrid = this.game.nextGenration()
      // this.grid = JSON.parse(JSON.stringify(newGrid));
      this.grid = newGrid
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  td{
  height: 10px;
  width: 10px;
  border: 1px solid #ddd ;
}
  .alive{
    background-color: greenyellow;
  }
  .dead{
    background-color: white;
  }
</style>
