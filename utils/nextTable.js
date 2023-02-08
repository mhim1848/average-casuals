import { cloneDeep } from 'lodash';

export default function nextTable(currentTable, row, column, player) {
  const nextTable = cloneDeep(currentTable);

  nextTable[row][column] = player;
  return nextTable;
}
