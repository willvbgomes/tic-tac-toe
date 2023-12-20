import './Game.css'
import { useState } from 'react'
import GameScore from './GameScore'
import GameStatus from './GameStatus'
import Board from './Board'
import ResetGame from './ResetGame'

const getWinner = squares => {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (const condition of winConditions) {
    const [a, b, c] = condition

    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a]
    }
  }
}

function Game() {
  const [moves, setMoves] = useState(Array(9).fill(null))
  const [score, setScore] = useState({ X: 0, draw: 0, O: 0 })
  const notNullSquares = moves.filter(move => move !== null)
  const nextMove = notNullSquares.length % 2 === 0 ? 'X' : 'O'
  const status =
    notNullSquares.length < 9 ? `Próxima Jogada: ${nextMove}` : 'Empate'
  const winner = getWinner(moves)
  const gameOver = winner || notNullSquares.length === 9

  const updateScore = (winner = 'draw') => {
    const newScore = { ...score }
    newScore[winner] += 1

    setTimeout(() => {
      setScore(newScore)
      setMoves(Array(9).fill(null))
    }, 2000)
  }

  const resetScore = () => {
    setScore({ X: 0, draw: 0, O: 0 })
    setMoves(Array(9).fill(null))
  }

  gameOver && updateScore(winner)

  return (
    <div className="game">
      <GameScore scoreData={score} />
      <GameStatus status={winner ? `Vencedor: ${winner}` : status} />
      <Board
        squares={moves}
        updateSquares={setMoves}
        checkWinner={() => getWinner(moves)}
        moveValue={nextMove}
      />
      <ResetGame reset={resetScore} />
    </div>
  )
}

export default Game
