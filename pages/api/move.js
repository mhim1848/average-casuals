import * as R from 'ramda';
import didPlayerWin from '../../functions/didPlayerWin';
import nextTable from '../../utils/nextTable';

export default function handler(req, res) {
  const transpose = R.transpose(req.body.board);
  const legal = transpose.map((e, index) => ({
    row: e.length - 1 - e.reverse().findIndex((i) => i === '_'),
    col: index,
  }));
  const filtered = legal.filter((e) => e.row < 6);
  console.log(filtered[Math.floor(Math.random() * filtered.length)]);
  const move = filtered[Math.floor(Math.random() * filtered.length)].col;

  res.status(200).json({ column: move });

  const response = JSON.parse(req.body.board);

  let t = R.transpose(response.board);

  const nextSteps = legal.map((item, index) =>
    nextTable(t, index, 6 - item.row, response.player)
  );

  res.status(200).json(nextSteps);
}
