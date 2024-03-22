import Menu from "../components/Menu";
import Footer from "../components/Footer";
import styles from "./Home.module.css"

function Home() {
    const cardImages = [
        {
            urlImage: "https://i.imgur.com/mK7tFPf.jpeg",

        },

        {
            urlImage: "https://i.imgur.com/WcBlOzV.png"
        }, 

        {
            urlImage: "https://i.imgur.com/hlbSjTL_d.webp?maxwidth=520&shape=thumb&fidelity=high"
        },

        {
            urlImage: "https://i.imgur.com/hFFs7qX_d.webp?maxwidth=520&shape=thumb&fidelity=high"
        },

        {
            urlImage: "https://i.imgur.com/bFqHajU_d.webp?maxwidth=520&shape=thumb&fidelity=high"
        },

        {
            urlImage: "https://i.imgur.com/P0jz0gs_d.webp?maxwidth=520&shape=thumb&fidelity=high"
        },

        {
            urlImage: "https://i.imgur.com/b1CntEC_d.webp?maxwidth=520&shape=thumb&fidelity=high"
        },

        {
            urlImage: "https://i.imgur.com/0W80ka2_d.webp?maxwidth=520&shape=thumb&fidelity=high"
        }
    ]

    const imagesCategory = [
        {
            name: "Fantasia",
            urlImage: "https://i.imgur.com/c8jLXkK.jpeg",
        },

        {
            name: "Fan art",
            urlImage: "https://i.imgur.com/hmbYvDH.jpeg",
        },

        {
            name: "Anime/Manga",
            urlImage: "https://i.imgur.com/gtO1o2E.jpeg",
        },

        {
            name: "Game art",
            urlImage: "https://i.imgur.com/As7q2Um.jpeg"
        }
        
    ]

    const imagesShop  = [
        {
            urlImage: "https://i.imgur.com/xTPVTch_d.webp?maxwidth=520&shape=thumb&fidelity=high",
        },

        {
            urlImage: "https://i.imgur.com/rdHK81J_d.webp?maxwidth=520&shape=thumb&fidelity=high"
        },

        {
            urlImage: "https://i.imgur.com/jY0tJn6_d.webp?maxwidth=520&shape=thumb&fidelity=high"
        }
    ]

    return(
        <>
            <Menu />

            {/* controles */}
            <article>
                <div className={styles.container}>
                    <button className={styles.addPost}>+</button>
                    <button className={styles.filter}> 
                    <img className={styles.iconFilter} src="./src/assets/filtro.png" />
                    </button>
                </div>
            </article>
            {/* fim controles */}

            <section className={styles.content}>            
                    {cardImages.map((item => (
                       <div key={item}>
                             <img  className={styles.filterImg} src={item.urlImage} />
                       </div>
                    )))}  
            </section>

            <button className={styles.showMore}>Ver mais</button>

            <aside>
                <h1 className={styles.titles}>Categorias</h1>
                
                <div className={styles.containerCategory}>
                    {imagesCategory.map((item => (
                        <div>
                            <img src={item.urlImage} />
                            <p className={styles.nameCategory}>{item.name}</p>
                        </div>
                    )))}
                </div>
               
            </aside>


            <aside>
                <h1 className={styles.titles}>Loja</h1>
                <div className={styles.containerShop}>
                    {imagesShop.map((element => (
                        <div className={styles.shop}>
                            <img className={styles.imgPrimary} src={element.urlImage} />
                            <div className={styles.contentItens}> 
                                <h1>Titulo da arte</h1>
                                <span className={styles.likes}>
                                    <img src="./src/assets/like.png" />
                                    <p>100</p>
                                </span>
                                <span className={styles.tag}>SFW</span>
                               <div className={styles.subProfile}>
                                    <img src="./src/assets/elipse.svg" /> 
                                    <span> Sofiaazys </span>
                               </div>
                               <button className={styles.buttonPrice}>50R$</button>
                            </div>
                        </div>
                    )))}
                </div>
            </aside>

            <Footer />
        </>
    )
}


export default Home;