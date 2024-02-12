import React from "react";
import Card from '../Card/Card';
import './CardList.css';


function CardList(props) {
    
    return (
        <section className="cards">
            <ul className="cards__elements">
                    
                {props.cards.map((card) => {
                    return (
                        <Card
                            key={card._id}
                            card={card}
                            onCardClick={props.onCardClick}
                            // onCardSaved={props.onCardSaved}
                        />        
                    )
                })}

            </ul>       
        </section>
        
    );

}

export default CardList;