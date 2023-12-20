import './Board.css'
import Square from './Square'

function Board({ squares, updateSquares, checkWinner, moveValue }) {
  const handleClick = ({ target }, i) => {
    if (squares[i] || checkWinner()) {
      return
    }

    const newSquares = squares.slice()

    newSquares[i] = moveValue
    target.classList.remove('x')
    target.classList.remove('o')
    target.classList.add(moveValue.toLowerCase())

    updateSquares(newSquares)
  }

  return (
    <div className="board">
      {squares.map((_, index) => (
        <Square
          key={index}
          value={squares[index]}
          onPlay={event => handleClick(event, index)}
        />
      ))}
    </div>
  )
}

export default Board
