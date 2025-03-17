import style from './CardService.module.css';
import { Link } from 'react-router-dom';


const Card = (props: { title: string, content: string, image: string, link: string }) => { 
    return (
        <div className={style.card}>
            <div className={style.cardTopo}>
                <img src={props.image}/>
                <h1>{props.title}</h1>
            </div>
            <p>{props.content}</p>
            <Link className={style.link} to={props.link}>Saiba mais</Link>
        </div>
    );
}

export default Card;