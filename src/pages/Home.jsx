import Menu from "../components/Menu";
import Footer from "../components/Footer";
import styles from "./Home.module.css"

function Home() {
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

    const imagesCategory = [
        {
            name: "Fantasia",
            urlImage: "https://s3-alpha-sig.figma.com/img/5d38/8b8a/a79180ff0b3cde8776ae056021a28328?Expires=1704067200&Signature=cVgeAPLVGTDy0G4V0BC76GAkLrSAy6HWLC~mtB4ho4640HSSZs9WaC0b290SU2VvFRJ601XqJWojuJUX5scXCsnR9vHlBgYHychdSXsJP2fV2XiEeBnGVoseqo9WVTBakuU6OM0JxedEZ0Ff6MkfiV0i4z-kG4d25Fe8w00OUuk9RKvsJh-O7BwylI4i9AiPHaLdmKm4i~G1WLkH5Uk~UC-gN1MwwgGnioVoOEwF~fwkq8RvKegiGxWT9YYyv7wZ~Pev2YEky9u~BoLzOwda2Co7MM6FLUu~T~NCWqW1~s5fgfUV8rGpn1vsuf9nUnFk8AV2sF9evwkm8-Nj2aJlXg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },

        {
            name: "Fan art",
            urlImage: "https://s3-alpha-sig.figma.com/img/dab9/a78b/94ed52caf0e51e3d8805d1b914a9acbc?Expires=1704067200&Signature=YPDriX2Rd2nGY7VhEJ562LZnG4YJAO~vug-IKImzVKYSznUt55ptxxaSEtxs1DvX9-wl4nSPNPFzDBchVr~50VQvb-5Q4inh7YdFE42BLn6Qw~GAHEdA2rgGnotoI07Hcc0enNQj3jzcmAeszDrJkY9LAd69pBISM-uk6wMFG~8JbkgOVFdnr3YUQUux~2Zu5GfkMGvYVZwJPv~-xvdQENSx5j92-0lwJgeXgTXvW1Mcu~GYN4ioReA-yVHzNnEvgrf3aiOBKdZz0h39ixnCm9wDcVWi49bxGeeQJ0-URdBF8IrlQbTFUPsbwy-MlK1I1b-93DASj1ne7qFsqY7drw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },

        {
            name: "Anime/Manga",
            urlImage: "https://s3-alpha-sig.figma.com/img/d836/8080/cf1f2eff06d8586b21241f6fb7d2f676?Expires=1704067200&Signature=Vv6bk~7hFKxNuOpxl9bbC8gpjEWiyAJXZvEil5-tBxUUci4JFJnBsNJUKlEBoHBeiedulqVmhRITgxfJRuIQ24ez9fcyvLMYsnEd8F23fzb3tWVofpObI5kc3cClH1dknVNUVci4wu-PhojTq499EO8bXDdXFtnClHwyuZEH-G9pm4AErcTIKBG2kmB1Za-Ig80Oif8bevcKIf6jxmjWUXV4l9BhCJKNJrnl8Wawh695CGLgCbYjELnDLtTmf7FwUnAmeeKsN-N4zrf3rzPxwEV1dUub0jCIMQIYfAavsamD9c5lERGgFYjN8a4Wzod41ivWL2b5EaXIcNRVuS9~kQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },

        {
            name: "Game art",
            urlImage: "https://s3-alpha-sig.figma.com/img/8023/17d6/094ca9d70ff00b824990440965b4407a?Expires=1704067200&Signature=IkDLJM1h48OiwiT0698rfOypNPIDxrKdinpOKkPqJ6WUPn~w8dXFHGs73aInYuPiU31CeWcFcYSWX79dfvSS~QWT7TGJCAS3kxqL2uWEfWSBO0kcYwHX0ja1YK624B9aRzNsP3BBslsBSAfjmKirRVsWDOOmw~yaOGcQPqyzg-HIzgsfbOQbs08~hrsnxzo7YwwisHJCy97EzATS7R-NrQgDF9-DUcQ9UKTEJOyMmd58IjIe3CBPZmgIfV4Ppk3DsEMUEauQfs6FosCb05ebHKW2Zb9kWmucTvg4ynCBmcanecHGwUmUoos41olC3JKmsWIDmTsO6aDUWWtdlze7XA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        }
        
    ]

    const imagesShop  = [
        {
            urlImage: "https://s3-alpha-sig.figma.com/img/5c96/f01e/e7f83eefaabd641f764490d49b59201b?Expires=1704067200&Signature=PQdjr8sYS8GZcT2Y6gO3Lpys7ieV97tRP1z-SXmhI3wMu45oPu3-UVOYwBR4kbgHqQiELh5XTWdSMHrN3tSp-KWKJiYF42008DPMegzVSPoUO8hwl4WNE430Az3BnLvZkeiHLpbmpXCFXA9ZQhHxLrp80Ll2ep9Xq1L7WSuIJ41umILAftYALx41XWbQXAKLLrKnJWUwr9fSv0xmnfyR24-LyFwYQssSz53FgKms3aB0W2sioVYcE-YmOeHp~sNeMki2aCftRSzHx-4JQeDyvgmRVv-E8nDI6opjJ-cLQ1huotD7inaorIQof93vQ~3EpW66ZyAP-gen~ovZY~mJig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },

        {
            urlImage: "https://s3-alpha-sig.figma.com/img/8536/e0b3/34362b53aa3f09f96e798732f2454b8c?Expires=1704067200&Signature=U6cJ~2XiUt~59LyegE-MGU68j8OswJvCKyUNiYfKdpPiq~c-AJNFf5nY9jFUhxheZXkzRl6O0rtNEcJ73kfzjnmXyHqpsNmDMbc8~A61enrn2gnujKc9JxFqrX3zX4Dz1sucuPEDmw-MJ037AailO9DrUbDUycW2uYngt32fk~SNWss8FWwwbt9Mp60zTIlV98nU0XYZEvox5izmlmBTbT06~-ujVAY7Erk75tKtOHfQR3VqwXxwTtSjE8ZIW1HcHG-WE2rpgMv~2MUQaSmUcAG7qU~IVdBvSvWoYomoeHMMUxWMPGtL6cNxFJW6CV8k5Qu0~cdRKSdNhIzZWRs8Ng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },

        {
            urlImage: "https://s3-alpha-sig.figma.com/img/eef9/b513/99bf4debe9b47f68ff96a4ee270d5307?Expires=1704067200&Signature=htv~Jz4KdYBYj71RxkU-~TkiaHBk8aEZfYlXRh2PAuBYUNf~udUIfdhtGTQtj3A8Udj7AQHYFEdhiWWt7JJ8Yq0Jbul0IiQzXhCdq38bQr3Rx0fKUMZm~xZ1xUSmxuXXQT9JlkOwsNGDsP7ELGtJ~rBto7WwQZ~UP2OriDD2eKBSJ~sz2tZm9v7tcm1lXClGQTskm~K1DhI-Ihfrspa0PB66F6Cqri0GVAO8vTQ6JJQW4HA2C2g1Cf1-tyYPoOKroj8TuJ0qcmnDUau26GGlf2fTKmHRwu~BIGNpGNEjTsqJhXsMjYZd1vPOhqaE2ZkKi75Cj9JqF7RSzPHwiwpfSw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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