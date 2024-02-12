import CardList from '../CardList/CardList';
import './SavedCards.css';

function SavedCards(props) {
    return (
        <main className="saved-cards">
            <CardList 
                cards={props.cards}
            />
        </main>
    )
}

export default SavedCards;