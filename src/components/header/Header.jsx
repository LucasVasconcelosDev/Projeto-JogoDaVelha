import Icon from "../icon/Icon"
import styles from "./Header.module.css"
import Title from "../title/Title"
import Subtitle from "../subtitle/Subtitle"

function Header(){
    return(
        <div className={styles.header}>
          <Title>Jogo Da Velha</Title>
          <Subtitle>Criado por Lucas Vasconcelos</Subtitle>
          <div className={styles.iconContent}>
            <Icon iconName="github" link="https://github.com/LucasVasconcelosDev"/>
          </div>
      </div>
    )
}

export default Header