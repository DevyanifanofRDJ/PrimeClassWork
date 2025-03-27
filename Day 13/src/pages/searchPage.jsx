import React from 'react';
import "./searchPage.css";
import Card from "../Components/card.jsx"

const cards=[
    {
        title:"Invitation",
        text:"Hello Iron Man"
    },
    {
        title:"Notice",
        text:"I will Love Dr. Doom"
    }
];

const searchPage = () => {
  return (
    <div className='search-page'>
        <header>
            Logo
        </header>
        <main>
            <h2>Search here.....</h2>
            <div>
                {
                    cards.map((ele)=>{
                        return (
                            <Card title={ele.title} text={ele.text} key={ele.title}></Card>
                        )
                    })
                }
                {/* {cards.map((ele)=>{
                    return (
                        <div key={ele.title}>
                            <h3>{ele.title}</h3>
                            <p>{ele.text}</p>
                        </div>
                    );
                })} */}
                {/* <div>
                <div>
                    <h2>{cards[0].title}</h2>
                    <p>{cards[0].text}</p>
                </div>
                <div>
                    <h2>{cards[1].title}</h2>
                    <p>{cards[1].text}</p>
                </div>  */}
            </div>
        </main>
    </div>
  );
};

export default searchPage;