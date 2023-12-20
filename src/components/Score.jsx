import './Score.css'

function Score({ playerData }) {
  const [player, score] = playerData

  return (
    <div className="score-info">
      <span className="player">
        {player === 'draw' ? 'Empate' : `Jogador ${player}`}
      </span>
      <span className="score">{score}</span>
    </div>
  )
}

export default Score
