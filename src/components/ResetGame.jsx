import './ResetGame.css'

function ResetGame({ reset }) {
  return (
    <button className="reset" onClick={reset}>
      Resetar
    </button>
  )
}

export default ResetGame
