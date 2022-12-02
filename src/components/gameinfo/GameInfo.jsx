import styles from "./GameInfo.module.css"
import Icon from "../icon/Icon"
import Button from "../button/Button"

function GameInfo({player, winner, onReset, draw}){
    const enableButton = ()=>{
        if(winner !==0) return true
        if(draw) return true
    }
    return(
    <div className={styles.gameInfo}>
        {
            !draw && winner===0 &&
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
            !draw &&winner!==0 &&
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
        {
            draw && <h4>Deu Velha!</h4>
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