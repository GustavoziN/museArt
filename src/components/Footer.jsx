import styles from "./Footer.module.css";

function Footer() {
    return (
        <>
            <footer className={styles.containerFooter}>
                <div className={styles.contentLogo}>
                    <img src="./src/assets/LogoV2.png" width="130" height="50" />
                </div>

                <div className={styles.content}>
                    <ul>
                        <li>
                            <a> Sobre</a>
                        </li>

                        <li>
                            <a> Contato</a>
                        </li>

                        <li>
                            <a> Membros Principais</a>
                        </li>

                        <li>
                            <a> Porteção MuseArt</a>
                        </li>
                    </ul>
                </div>

                <div className={styles.content}>
                <ul>
                        <li>
                            <a> Desenvolvedores</a>
                        </li>

                        <li>
                            <a> Anunciar</a>
                        </li>

                        <li>
                            <a> Termos de serviço</a>
                        </li>

                        <li>
                            <a> Etiquetas</a>
                        </li>
                    </ul>
                </div>

                <div className={styles.content}>
                     <ul>
                        <li>
                            <a> Carreiras</a>
                        </li>

                        <li>
                            <a> Politicas de privacidade</a>
                        </li>

                        <li>
                            <a> Politica e direitos autorais</a>
                        </li>

                        <li>
                            <a> ajuda e FAQ</a>
                        </li>
                    </ul>
                </div>

            </footer>
        </>
    )
}

export default Footer