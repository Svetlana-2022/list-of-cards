import React from "react";
import { Link } from 'react-router-dom';
import './ImagePlace.css';

function ImagePlace(props) {
    
    return (
        <section className="place">
            <div className="place__card">
                <img className="place__img" src={props.card.image} alt='cat'/>
                <div className="place__container">
                    <h3 className="place__title">
                        {props.card.title}
                    </h3>
                </div>
                <Link  to="/" class="place__close-button">вернуться к списку карточек</Link>
            </div>
        </section>
    );
}

export default ImagePlace;