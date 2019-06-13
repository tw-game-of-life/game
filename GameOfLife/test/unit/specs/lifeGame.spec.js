import LifeGame, {Cell} from "../../../src/lib/lifeGame";

describe('lifeGame', () => {
  it('should getNextCellState ', () => {
    let cell = new Cell(0, 0, 1);
    cell.nextState(3);
    expect(cell.state).toEqual(1);
    cell.nextState(2);
    expect(cell.state).toEqual(1);
    cell.nextState(1);
    expect(cell.state).toEqual(0);
  })
});
