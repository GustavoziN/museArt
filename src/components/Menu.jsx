import styles from "./Menu.module.css";
import { useState } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';

function Menu() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handlerClick = (rote) => {
        navigate(rote);
        setMenuOpen(false)
    }

    const toggleStyle = () => {
        setMenuOpen(!isMenuOpen);
    }

    const menuClass = isMenuOpen ? styles.showMenu : styles.hideMenu;
    
    
    return (
        <div>
            <nav className={styles.headerContainer}>
                {/* começo menu mobal */}
                   <ul className={styles.containerMenuMobal}>
                        <li>
                            <img onClick={toggleStyle} src="./src/assets/cardapio.png" width="40" height="40"/>
                        </li>
                   </ul>
                {/* fim menu mobal */}

                <ul className={`${styles.headerLinks} ${menuClass}`}>
                    <li>
                       
                    </li>
                    <li className={styles.cfgLi}>
                        <img className={styles.logo} src="./src/assets/LogoV2.png" width="130" height="50"/>
                    </li>
                    <li className={styles.cfgLi}>
                        <a>Populares</a>
                    </li>
                    <li className={styles.cfgLi}>
                        <a>Loja</a>
                    </li>

                    <li className={styles.cfgLi}>
                        <a onClick={() => handlerClick("/")}>Inicio</a>
                    </li>
                </ul>

                <div className={styles.containerPerfil}>
                        <div className={styles.iconsMenuMobal}>
                            <img  onClick={() => handlerClick('/Perfil')} src="./src/assets/perfil.png"/>
                        </div>
                    <img className={styles.iconsMenu} src="./src/assets/bater-papo.png" width="40" height="40"/>
                    <img className={styles.iconsMenu} src="./src/assets/amigos.png" width="40" height="40"/>
                    <img className={styles.iconsMenu} onClick={() => handlerClick('/Perfil')} src="./src/assets/perfil.png"/>
                </div>
            </nav>
        </div>
    )
}


export default Menu