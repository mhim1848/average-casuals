import * as R from 'ramda';

export default function handler(req, res) {
    let r = `
  {
    "gameId": "12345",
    "board": [
    ["S","_","_","_","_","_","_","_","_"],
    ["S","_","_","x","_","_","_","_","_"],
    ["S","_","_","x","_","_","_","_","_"],
    ["S","_","_","x","_","_","_","_","_"],
    ["S","F","_","x","_","F","_","_","_"],
    ["F","S","S","x","_","F","F","S","S"]
    ],
    "player": "F"
}`

    const response = JSON.parse(r);

    const transpose = R.transpose(req.board)
    const legal = transpose.map((e, index) => ({row:e.length - 1 - e.reverse().findIndex(i => i === '_'), col:index}))
    const filtered = legal.filter(e=>e.row < 6);
    const move = filtered[Math.floor(Math.random() * filtered.length)].col

    res.status(200).json(move)
}
