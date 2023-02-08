import * as R from 'ramda';

export default function handler(req, res) {
    const transpose = R.transpose(req.body.board)
    const legal = transpose.map((e, index) => ({row: e.length - 1 - e.reverse().findIndex(i => i === '_'), col: index}))
    const filtered = legal.filter(e => e.row < 6);
    const move = filtered[Math.floor(Math.random() * filtered.length)].col

    res.status(200).json({column: move})
}
