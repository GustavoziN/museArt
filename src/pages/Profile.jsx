import Menu from "../components/Menu"
import Footer from "../components/Footer"
import styles from "./Perfil.module.css"


function Profile() {

    const cardImages = [
        {
            urlImage: "https://s3-alpha-sig.figma.com/img/50b5/eddc/c16a90be35edd5acef25a4649fb1941e?Expires=1704067200&Signature=A6xeACtOOOhoHQCZbVXmeWWT41U5uYwu0hUJ24v9HwN-vFXUgG~Nbb8yHDbaOw8ux3BLfA2uNW1Xh6NYyVk2kf~0Ie5Pd1tRpMGPJKrOBWkilF7jFq0ucHBsxQyVhnYro7rPTnSd9wZKhGe3Tosiy7Hbe1YBm0DTw54Ge~yddNRp62-DAi7YFSZ~tJCb-RcMqnB5zq3IgK3RgKT9~gpdqdQumBKDq5zsKrT8~obEZV8a3xws9VtIIYmN~VKF2RuHJpfRlrEPJDy8S7QS60WEOwfgmG6-8aZbUDh7CUVJBc9dnfMJMm-8SqVH0ELV0UAE9C9bkwI8-2Sh~5~rK1Viqw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",

        },

        {
            urlImage: "https://s3-alpha-sig.figma.com/img/5030/4ba2/11cc48f3e8b5e5fe5150589e62745f03?Expires=1704067200&Signature=nO5zXL505rywOpU18fJ9W7wDQlOWSXerSryhqhWpyYtGQftK7sSisO4WutT0pYaPYwBtxwrW~lkORqOhxYp2WXTWH5w~2XpinY6VMVxuayy1MbDaAz~fFM3YBOaW2ebpwj4i5oS1RTMGnFDHmUf9fVm9SFSXp2KAnWJJRs~maumkr4yPOQYiNOcZbIJDExwMe-aQ6IGxHED185qnI9pjOfKDHQUSbn76dYiyoecIMOyIbD1lZ7v8FnrMl1Q4LnDpfMy3SHIyodnSRs2PCN5E9rtqvIQe7XqjXt8J5wZ2QZijceiLpsy3GLpSBbwvvhGwHL9isvvsClL9reFWl07Ucw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        }, 

        {
            urlImage: "https://s3-alpha-sig.figma.com/img/c932/2410/f4377545eb34c53a55150596005e3cff?Expires=1704067200&Signature=fpNOBi0V2nY1zXjtEDJp1vskRoxZdHbwxiSuUKrP2Am5cCJMxd8zGyQ-1RmHZYl1bYFbJqNZBZRPQNhmvIbeWfeTWotFB1keSbR36VF6S-ux1pfA8rGemUTQFMdxRNgtAwncoNB1-bGpdrhGemJjZgMffEz-91wj3qH8riFFoGix-fbgqOTp3KCEeUnY6n3AoQenb-xXmuLW2xJDkjZdouqYKs4-zcCDWl4xKYSFppAKz59I7f0ERz1vUHi34flyPWza36iZJqO06WZOvMi-CNclfK2rRTpMXRbazb0wztKZZGtPLz1gYdR8w7QL4fxOFLui8h3fyOdhWlTeBfZZYQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },

        {
            urlImage: "https://s3-alpha-sig.figma.com/img/8e03/4297/e096da133cadaf781bc587966872c846?Expires=1704067200&Signature=i4TNWWOb~3NcDVfPRZct98w~vrjva2DhMQxN4RVd9iBc9xSdNJzacoyT09Tw~~aSlHeu9Kpty3ayLzgihO5U6OBF7RVDIwFxq0mmLqNe~8kI-LqyAc0ml-YdQ0aPo8zM8h2AA8eeVO6eWTImTAcGvKRJ2hF51EJvgwNwD5yNHww4nhjgh-rCDZrw74701IN6TNLuirHvx~br2ICIMrXbA1tjTtO2Zno7XOdiPXsMvIktuNWxLLeGJPgc~65DTPsBEQh6oK5dzjTZDGWinJRSMY2TG7n6GXJdqF~IerK0qJdzp9Fz-hE5-ztF616--GcFT6Se9mS1JlFB6OIPXU6S~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },

        {
            urlImage: "https://s3-alpha-sig.figma.com/img/e2d6/586a/65229cac9d582ede62e7733fc2fc64a8?Expires=1704067200&Signature=BejzeXTbSjyOOf27C-7hIYYRPHYJ~59t9u2ES8~8~RnAIEV~-NDw68sTYn6R873IDoOL7rhsIoM0YXav-Teai-o93XILlk-lzfT5GGJODIwN~K90IVzE~NEWlC1gNHaLN7JxGHUhpdggLq05txF8FYuHV9bSE22XBzjcl1QmA~t3kOF0ZV3MY~tAadrp~jErKAgrD-mRdkP9w42RqekjftAwsU3R0OdgaUuFthg0ep~VYGbyz-VumBVRvj2HGNsyYShP8hF9VnDghcCvhkm79o8yEKGcUnTHQHLNfMOwIY5l-bmaz3oHDjmy9xGFLuddJ79whELeSpnAma8zEkcmLg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },

        {
            urlImage: "https://s3-alpha-sig.figma.com/img/7e9d/7ad9/5630ad0028dd6a154f4b4e56fcb4faea?Expires=1704067200&Signature=RpiEEg9qmX~44BBvgf6Zz-nbS0Zi--h3w-OM99PXEL238nep1DHusPlK7L9cpt5ZdAZBRyEA4CalJSjbqjD-gY1iz1wRn4YtgY4QhOqeEUtwwSV97Ykv2w5uoV9HCR5FkRiCDj8xlRhwpWnb9XXXTjwirY1NAV~2W2a5XbR7CnT456rU2nnHqDO5llR07ACE5t8~G8EAtw~kBTSMBaV5ajVJZDQdFHeqjak7bVXUFGaH-BExNBpbL2n2l4j0IPAT67TjzEiuCp4zKBKi-UfT1YsVP2hV64vBojSykfWyb4nu3Kayo~Rf5dW3~cbW8mCWO75uIXchRUhK0t8vz4SRLg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },

        {
            urlImage: "https://s3-alpha-sig.figma.com/img/4b4f/7a78/0256024207052a668b54150ff26ce63d?Expires=1704067200&Signature=WjlxQWd-GRaT255ujj6vYMZnSltjeBwFEX6tgYrfpaYt1bMgdUaUS2nLNWC-WEgt3ooQRf0vW2Ezb7GUX-HL7NaJUtM6LjlZBZ3vIeXmMiKddlTM3vPogmMUWIVG7tF5mft~V3oS1r4id0DSUvEwu879zVMGtI1m3jJeMgwMfWzMlxnsv7~VRsWgfPsQFjl1erRV~p9oLS~f~0hluiwXKmpm3UjMnADMH2BAOhj0-WP3b3DPRQwEue~ymneskUgbG64nUjUulqlKIBXKsnJOnGk0uShPBb0V1cQZBpShXusItYcCg8sbLT-zTI2GJmFwwS1ViZmKd-FDomX2lGiJRQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },

        {
            urlImage: "https://s3-alpha-sig.figma.com/img/a9d6/c479/e06dcb7620055e7ef469913f7e586d57?Expires=1704067200&Signature=n99OBUq1aKGeDDJXP-58FflvPqeH5cvletC8JTLL3oYwFcU0O8ovLWCzDml46CoiXiLGNseP5QwrMiCbK75wFRI~t5NsoQG91D7paEGwDfGHNr1z8xG9zSX6pwBeJreBPuiHobB--SSjt7h5ZHIaiHjVbqAfT7LEIVvyr64cu4~EtAViOUgZYF9BusTRQfoIsUlSXcgB5MDA4lDfnwyaarwok2a4yqxRdAaUaLzsd7TfB3xHBZFyygYijYNAwtSOzfhyM5oGvIr9bH~rtF2BdNEr6tfAMQtlc1x2KqlFpfuEgOHiwwaDGOOyBR-oMUfxadqeY4S6aTCK4Rzu09eGQg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        }
    ]


    return ( 
        <>
            <Menu />

            <section className={styles.containerCardProfile}>
                <div className={styles.cardProfile}>
                    <div className={styles.itensUser}>
                        <img src="https://i.pinimg.com/564x/a1/eb/c6/a1ebc6a94e265a33de6e022cb69bcf5d.jpg"/>
                        <p className={styles.nameUser}>name user</p>
                    </div>
                    
                    <div className={styles.editProfile}>
                        <button>Editar Perfil</button>
                    </div>
                </div>
            </section>

            <aside className={styles.containerCollection}>
            {cardImages.map((element => (
                       <div  className={styles.itemCollection}>
                             <img className={styles.filterImg} src={element.urlImage} />
                             <div className={styles.controlsFeed}>
                               <div className={styles.containerControls}>
                                    <span><img className={styles.iconsControls} src="./src/assets/coracao.png" /></span>
                                    <p className={styles.statistics}>100</p>
                                    <span><img className={styles.iconComment} src="./src/assets/comente.png" /></span>
                                    <p className={styles.statistics}>20</p>
                               </div>

                               <div>
                                <span><img className={styles.iconsControls} src="./src/assets/opcoes.png" /></span>
                               </div>
                             </div>
                       </div>
                    )))}  
            </aside>

            <Footer />
        </>
    )
}

export default Profile