import * as R from 'ramda';

export default function handler(req, res) {
    let r = `
  {
    "gameId": "12345",
    "board": [
    ["_","_","_","_","_","_","_","_","_"],
    ["_","_","_","x","_","_","_","_","_"],
    ["_","_","_","x","_","_","_","_","_"],
    ["_","_","_","x","_","_","_","_","_"],
    ["S","F","_","x","_","F","_","_","_"],
    ["F","S","S","x","_","F","F","S","S"]
    ],
    "player": "F"
}`

    const response = JSON.parse(r);

    let t = R.transpose(response.board)
    let legal = t.map(e=>e.length - e.reverse().findIndex(i=>i === '_'))

    res.status(200).json(legal)
}
