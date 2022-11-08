import { useState, useEffect} from "react"

import styles from "./Game.module.css"
import GameOption from "../gameOption/GameOption"
import Icon from "../icon/Icon"
import GameInfo from "../gameinfo/GameInfo"

const winnerTable = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

function Game(){
    const [gameState, setGameState]= useState(Array(9).fill(0))
    const [player, setPlayer]= useState(-1)
    const [winner, setWinner] = useState(0)
    const [winnerLine, setWinnerLine] = useState([])
    const handleClick = (position)=>{
        if(gameState[position] === 0 && winner === 0){
            let newgameState=[...gameState]
            newgameState[position]= player
            setGameState(newgameState)
        }
    }
    const verifyGame = ()=>{
        winnerTable.forEach((line) => {
            const values = line.map((pos)=> gameState[pos])
            const sum = values.reduce((sum, value)=> sum + value)
            if(sum === 3 || sum === -3){ 
                setWinner(sum/3) 
                setWinnerLine(line)
            }
        })
    }

    const handleReset = ()=>{
        setGameState((Array(9).fill(0)))
        setWinner(0)
        setPlayer(-1)
        setWinnerLine([])
    }

    const verifyWinnerLine = (position) => 
    winnerLine.find((value)=> value===position) !== undefined


    useEffect(()=>{
        setPlayer(player*(-1))
        verifyGame()
    },[gameState] )

    return(
       <div className={styles.gameContent}>
             <div className={styles.game}>
            {
                gameState.map((value, position)=>
                    <GameOption
                        key={`game-option-position-${position}`}
                        status={value}
                        click={()=> handleClick(position)}
                        isWinner={verifyWinnerLine(position)}
                    />
                )
            }
        </div>
            <GameInfo 
                player={player}
                winner={winner}
                onReset={handleReset}
            />
       </div>
    )
}

export default Game