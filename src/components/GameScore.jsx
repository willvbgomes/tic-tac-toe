import './GameScore.css'
import Score from './Score'

function GameScore({ scoreData }) {
  const score = Object.entries(scoreData)

  return (
    <div className="game-score">
      {score.map((data, index) => (
        <Score key={index} playerData={data} />
      ))}
    </div>
  )
}

export default GameScore
