import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

function Card({ card, onCardClick }) {
    const [like, setLike] = useState(false);
    const cardLikeButtonClassName = like ? 'card__like_active' : 'card__like';
   
    function handleClick() {
        onCardClick(card);
    }
     
    function handleLikeClick() {
        
        if(like) {
            setLike(false);
            card.likes = [];
        }else {
            setLike(true);
            card.likes = [1];   
        }  
    }
    
    function handleCardDeleteClick(e) {
        const element = e.currentTarget;
        const cardElement = element.closest('.card');
        cardElement.remove();
    }

    const newCard ={
        image: card.image,
        title: card.title,
    }

    return (
        
            <li className="card">
                <button type="button" className="card__trash" onClick={(e)=>handleCardDeleteClick(e)}></button>
                <Link to="/image"  onClick={()=>handleClick()}>
                    <img className="card__img" src={newCard.image} alt='cat'/>
                </Link>
                <div className="card__container">
                    <h2 className="card__title">{newCard.title}</h2>
                    <div className="card__like-container">
                        <button type="button" className={cardLikeButtonClassName} onClick={()=>handleLikeClick()}></button>
                        <div className="card__like-count"></div>
                    </div>
                </div>
            </li>
          
    )
}

export default Card;