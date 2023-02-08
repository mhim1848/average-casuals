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

    // const board = JSON.parse(r ?? '[]');
    const board = req.body.board;

    const transpose = R.transpose(board)
    const legal = transpose.map((e, index) => ({row:e.length - 1 - e.reverse().findIndex(i => i === '_'), col:index}))
    const filtered = legal.filter(e=>e.row < 6);
    const move = filtered[Math.floor(Math.random() * filtered.length)].col

    res.status(200).json({column:move})
}


function checkWin(board) {
    board.forEach((row, index) => {
        checkNeighbour(null, row, index)
    })
}

function checkNeighbour(char, row, index) {
    row.reverse().forEach((cell, cellIndex) => {
        if (cell === '_') return;
        if (cell === char) {

        }
    })
}
