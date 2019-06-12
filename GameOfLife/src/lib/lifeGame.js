function Cell(x,y,state) {
  this.x = x;
  this.y = y;
  this.state = state;

}

Cell.prototype.nextState=function (aliveCount) {
  if(this.state === 1){
    if(aliveCount < 2 || aliveCount > 3){
      this.state = 0;
    }
  }else{
    if(aliveCount === 3){
      this.state = 1;
    }
  }
}

class LifeGameController {
  constructor (row,col){
    this.row = row;
    this.col = col;
  }
  init(){
    let grid = [];
    for (var i = 0; i < this.row; i++){
      grid[i] = [];
      for(let j = 0; j<this.col; j++){
        grid[i][j] = new Cell(i,j,this.random());
      }
    }
    this.grid = grid;
    return grid;
  }
  random(){
    return Math.random() > 0.5 ? 1 : 0;
  }
  nextGenration(){

  }
}
export default LifeGameController;
