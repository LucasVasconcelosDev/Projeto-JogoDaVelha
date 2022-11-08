import styles from "./GameInfo.module.css"
import Icon from "../icon/Icon"
import Button from "../button/Button"

function GameInfo({player, winner, onReset}){
    const enableButton = ()=>{
        if(winner !==0) return true
    }
    return(
    <div className={styles.gameInfo}>
        {
            winner===0 &&
            <>
                <h4>Proximo a Jogar:</h4>
                {
                player===1 && <Icon iconName="circle"/>
                }
                {
                player===-1 && <Icon iconName="x"/>
                }
            </>
        }
        {
            winner!==0 &&
            <>
                <h4>Vencedor!</h4>
                {
                    winner===1 && <Icon iconName="circle"/>
                }
                {
                    winner===-1 && <Icon iconName="x"/>
                }
            </>
        }
        <Button
            onClick={onReset}
            disabled={!enableButton()}
        >
            Reiniciar jogo
        </Button>
    </div>
    )
}

export default GameInfo