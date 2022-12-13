import { useState, useEffect} from "react"

import styles from "./Game.module.css"
import GameOption from "../gameOption/GameOption"
import GameInfo from "../gameinfo/GameInfo"
import Score from "../score/Score"

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
    const [draw, setdraw] = useState(false)
    const [playerO, setplayerO] = useState(0)
    const [playerX, setplayerX] = useState(0)
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
                if (sum === 3) setplayerO(playerO+1)
                if (sum === -3) setplayerX(playerX+1)
            }
        })
    }

    const handleReset = ()=>{
        setGameState((Array(9).fill(0)))
        setWinner(0)
        setPlayer(-1)
        setWinnerLine([])
        setdraw(false)
    }

    const verifyDraw = ()=>{
        if(gameState.find((value)=> value === 0) === undefined && winner === 0){
            setdraw(true)
        }
    }

    const verifyWinnerLine = (position) => 
    winnerLine.find((value)=> value===position) !== undefined


    useEffect(()=>{
        setPlayer(player*(-1))
        verifyGame()
        verifyDraw()
    },[gameState] )

    useEffect(()=>{
        if(winner !== 0) setdraw(false)
    }, [winner])

    return(
        <>
            <div className={styles.gameContent}>
                <div className={styles.game}>
                {
                    gameState.map((value, position)=>
                        <GameOption
                            key={`game-option-position-${position}`}
                            status={value}
                            click={()=> handleClick(position)}
                            isWinner={verifyWinnerLine(position)}
                            isDraw={draw}
                        />
                    )
                }
                </div>
                <GameInfo 
                    player={player}
                    winner={winner}
                    onReset={handleReset}
                    draw={draw}
                />
            </div>
                <Score
                    playerO={playerO}
                    playerX={playerX}
                />
        </>
    )
}

export default Game