function Cell(x, y, state) {
  this.x = x;
  this.y = y;
  this.state = state;

}

Cell.prototype.nextState = function (aliveCount) {
  if (this.state === 1) {
    if (aliveCount < 2 || aliveCount > 3) {
      this.state = 0;
    }
  } else {
    if (aliveCount === 3) {
      this.state = 1;
    }
  }
};

class LifeGameController {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }

  init() {
    let grid = [];
    for (var i = 0; i < this.row; i++) {
      grid[i] = [];
      for (let j = 0; j < this.col; j++) {
        grid[i][j] = new Cell(i, j, this.random());
      }
    }
    this.grid = grid;
    return grid;
  }

  random() {
    return Math.random() > 0.5 ? 1 : 0;
  }

  getLiveCount(cell) {
    let x = cell.x;
    let y = cell.y;

    let count = 0;
    if (y > 0) {
      if (x > 0 && this.grid[x - 1][y - 1].state === 1) count++;
      if (this.grid[x][y - 1].state === 1) count++;
      if (x < this.row-1 && this.grid[x + 1][y - 1].state === 1) count++;
    }
    if (y < this.col-1) {
      if (x > 0 && this.grid[x - 1][y + 1].state === 1) count++;
      if (this.grid[x][y + 1].state === 1) count++;
      if (x < this.row-1 && this.grid[x + 1][y + 1].state === 1) count++;
    }

    if (x > 0 && this.grid[x - 1][y].state === 1) count++;
    if (x < this.row-1 && this.grid[x + 1][y].state === 1) count++;

    return count;
  }

  nextGenration() {
    let newGrid = [];
    for (let i = 0; i < this.row; i++) {
      newGrid[i] = [];
      for (let j = 0; j < this.col; j++) {
        let oldState = this.grid[i][j].state;
        let cell = new Cell(i, j, oldState);
        let aliveCount = this.getLiveCount(cell);
        cell.nextState(aliveCount);
        newGrid[i][j] = cell;
      }
    }
    this.grid = newGrid;
    return newGrid;
  }
}

export default LifeGameController;
