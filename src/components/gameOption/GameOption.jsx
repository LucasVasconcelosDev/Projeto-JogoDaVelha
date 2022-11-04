import styles from "./GameOption.module.css"
import Icon from "../icon/Icon"

function GameOption({status, click}){
    return(
        <div className={styles.gameOption} onClick={click}>
            {
                status === 1 && <Icon iconName="circle"/>
            }
            {
                status === -1 && <Icon iconName="x"/>
            }
        </div>
    )
}

export default GameOption