import style from './Home.module.css'
import CardService from './Card/CardService'
import PageTransition from '../../components/pageTransition'

const Home = () => {
    return (
        <PageTransition>
            <div className={style.home}>
                <div className={style.banner}>
                    <div className={style.leftside}>
                        <h1>Se está procurando uma solução eficiente, funcional e tecnológica para a sua empresa?</h1>
                        <p>A DevSolutions pode te ajudar, entre em contato agora para resolver seus problemas!</p>
                        <div className={style.seo}>
                            <a href="#" className={style.button}>
                                Venha conhecer a empresa
                            </a>
                            <div className={style.icons}>
                                <a href="">
                                    <img src="/public/instagramIcon.png" alt="" />
                                </a>
                                <a href="">
                                    <img src="/public/linkedinIcon.png" alt="" />   
                                </a>
                                <a href="">
                                    <img src="/public/whatsappIcon.png" alt="" />   
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={style.rightside}>
                        <img src="../../../public/images/DevSolutionsFilter.png" alt="" />
                    </div>
                </div>
                <div className={style.cards}>
                    <CardService image="../../../public/icons/cardIon/devIcon.svg" title="Desenvolvimento" content="" link='/services' />
                    <CardService image="../../../public/icons/cardIon/penIcon.svg" title="Marketing e Design" content="" link='/services'/>
                    <CardService image="../../../public/icons/cardIon/ideiaIcon.svg" title="Consultoria e solução" content="" link='/services'/>
                    <CardService image="../../../public/icons/cardIon/suporteIcon.svg" title="Suporte e Hardware" content="" link='/services'/>
                </div>
            </div>
        </PageTransition>
    )
}

export default Home