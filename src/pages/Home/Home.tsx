import style from './Home.module.css'
import CardService from './Card/CardService'
import PageTransition from '../../components/pageTransition'

const Home = () => {
    return (
        <PageTransition>
            <div className={style.home}>
                <div className={style.banner}>
                    <div className={style.leftside}>
                        <h1>Está procurando uma solução eficiente, funcional e tecnológica para a sua empresa?</h1>
                        <p>A DevSolutions pode te ajudar, entre em contato agora para resolver seus problemas!</p>
                        <div className={style.seo}>
                            <a href="#" className={style.button}>
                                Venha conhecer a empresa
                            </a>
                            <div className={style.icons}>
                                <a href="">
                                    <img src="/instagramIcon.png" alt="" />
                                </a>
                                <a href="">
                                    <img src="/linkedinIcon.png" alt="" />   
                                </a>
                                <a href="">
                                    <img src="/whatsappIcon.png" alt="" />   
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={style.rightside}>
                        <img src="/images/DevSolutionsFilter.png" alt="" />
                    </div>
                </div>
                <div className={style.cards}>
                    <CardService image="/icons/cardIon/devIcon.svg" title="Desenvolvimento" content="" link='/services' />
                    <CardService image="/icons/cardIon/penIcon.svg" title="Marketing e Design" content="" link='/services'/>
                    <CardService image="/icons/cardIon/ideiaIcon.svg" title="Consultoria e solução" content="" link='/services'/>
                    <CardService image="/icons/cardIon/suporteIcon.svg" title="Suporte e Hardware" content="" link='/services'/>
                </div>
            </div>
        </PageTransition>
    )
}

export default Home