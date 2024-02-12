import './Main.css';
import CardList from '../CardList/CardList';

function Main(props) {
    return (
        <main className="content">
            <CardList cards={props.cards} onCardClick={props.onCardClick}/>
        </main>
    )
}

export default Main;