<template>
  <div class="game">
    <div class="table-warp">
      <table style="margin-top: 16px">
        <tbody>
          <tr v-for="rows in grid">
            <td
              :class="cell.state === 0 ? 'dead' : 'alive'"
              v-for="cell in rows"
              @click="cellClick(cell)"
            ></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="setting-warp">
      <div>
        <a-button size="large" @click="createGrid">createGrid</a-button>
        <a-input-number
          size="large"
          :min="10"
          :max="100"
          style="marginLeft: 16px"
          placeholder="row"
          v-model="tempRow"
        />
        <a-input-number
          :min="10"
          :max="100"
          size="large"
          style="marginLeft: 16px"
          placeholder="col"
          v-model="tempCol"
        />
      </div>
      <div>
        <a-button size="large" @click="random">random</a-button>
        <a-button size="large" @click="next" style="margin-left: 12px">next</a-button>
      </div>
      <div
        style="display: flex;align-items: center;width: 100%;position: relative"
      >
        <a-button size="large" @click="start">start</a-button>
        <a-button size="large" @click="stop" style="margin-left: 12px">stop</a-button>
        <a-slider
          v-model="speed"
          :max="2000"
          :min="50"
          :tooltipVisible="true"
          style="width: 40%"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LifeGame from "../lib/lifeGame.js";

export default {
  name: "Game",
  props: ["row", "col"],

  data() {
    return {
      grid: [],
      game: {},
      cleanTime: 0,
      speed: 1000,
      tempRow: this.row,
      tempCol: this.col
    };
  },
  created() {
    this.createGrid();
  },
  methods: {
    createGrid() {
      this.game = new LifeGame(this.tempRow, this.tempCol);
      this.grid = this.game.init(true);
    },
    random() {
      this.grid = this.game.init(false);
    },
    next() {
      const newGrid = this.game.nextGenration();
      this.grid = newGrid;
    },
    start() {
      this.stop();
      this.cleanTime = setInterval(() => {
        const newGrid = this.game.nextGenration();
        this.grid = newGrid;
      }, this.speed);
    },
    stop() {
      clearInterval(this.cleanTime);
      this.cleanTime = 0;
    },
    cellClick(cell) {
      this.game.cellClick(cell);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game {
  height: 100%;
  width: 100%;
  position: relative;

  display: flex;
  justify-content: center;
}

.table-warp {
  position: relative;
  flex: 1 1 60%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.setting-warp {
  position: relative;
  flex: 1 1 40%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: start;
}

.setting-warp > * {
  margin-top: 16px;
}

td {
  height: 20px;
  width: 20px;
  border: 1px solid #ddd;
}

.alive {
  background-color: greenyellow;
}

.dead {
  background-color: white;
}
</style>
