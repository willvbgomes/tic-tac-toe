import './Square.css'

function Square({ value, onPlay }) {
  return (
    <button className="square" onClick={onPlay}>
      {value}
    </button>
  )
}

export default Square
