import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ImagePlace from '../ImagePlace/ImagePlace';
import SavedCards from '../SavedCards/SavedCards';
import './App.css';

function App() {
    const [selectedCard, setSelectedCard] = useState({});
    const [texts, setTexts] = React.useState([]);
    const [images, setImages] = React.useState([
        {
            image: 'https://http.cat/100.jpg'
        },
        {
            image: 'https://http.cat/101.jpg'
        },
        {
            image: 'https://http.cat/102.jpg'
        },
        {
            image: 'https://http.cat/103.jpg'
        },
        {
            image: 'https://http.cat/205.jpg'
        }
    ]);

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'GET',
            headers: {'Content-type': 'application/json; charset=UTF-8',}
            })
            .then(res => res.json())
            .then((data) => {
                const dataTexts = Array.from({ length: 5 },
                    (_, i) => ({ title: data[i+1].title }));
                
                localStorage.setItem('dataTexts', JSON.stringify(dataTexts));
                const dataCard = JSON.parse(localStorage.getItem('dataTexts') || '[]');
                
                setTexts(dataCard);
            
            })
            .catch(err => console.log(err));
    }, []);

    const cardsMap = [];

    images.forEach((i) => {
        const newObj ={ 
            image: i.image,
        };
        cardsMap.push(newObj);
    });

    texts.forEach((text, i) => {
        const imagesObj = cardsMap;
        if( i === 0 ) {
            imagesObj[0].title = text.title;
        } if( i === 1 ) {
            imagesObj[1].title = text.title;
        }
        if( i === 2 ) {
            imagesObj[2].title = text.title;
        }
        if( i === 3 ) {
            imagesObj[3].title = text.title;
        }
        if( i === 4 ) {
            imagesObj[4].title = text.title;
        }
    });

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    return (
        <section className="App">
            <Header/>
            <Routes>
                <Route path="/" element={
                    <Main
                        cards={cardsMap}
                        onCardClick={handleCardClick}
                    />}
                />
                <Route path="/image" element={
                    <ImagePlace
                        card={selectedCard}
                    />}
                />
                <Route path="/saved" element={
                    <SavedCards/>}
                />
            </Routes> 
            <Footer/>
        </section>
    );
}

export default App;