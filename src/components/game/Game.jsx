import { useState } from "react"

import styles from "./Game.module.css"
import GameOption from "../gameOption/GameOption"
import Icon from "../icon/Icon"

function Game(){
    const [gameState, setGameState]= useState(Array(9).fill(0))
    const [player, setPlayer]= useState(1)
    const handleClick = (position)=>{
        if(gameState[position] === 0){
            let newgameState=[...gameState]
            newgameState[position]= player
            setPlayer(player*(-1))
            setGameState(newgameState)
        }
    }
    return(
       <div className={styles.gameContent}>
             <div className={styles.game}>
            {
                gameState.map((value, position)=>
                    <GameOption
                        key={`game-option-position-${position}`}
                        status={value}
                        click={()=> handleClick(position)}
                    />
                )
            }
        </div>
            <div className={styles.gameInfo}>
                <h4>Proximo a Jogar:</h4>
                {
                    player===1 && <Icon iconName="circle"/>
                }
                {
                    player===-1 && <Icon iconName="x"/>
                }
            </div>
       </div>
    )
}

export default Game