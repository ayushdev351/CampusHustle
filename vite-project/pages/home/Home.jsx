import React from "react";
import "./Home.scss";

import {cards} from "../../src/data";

import Featured from "../../components/featured/Featured";
import Card from "../../components/card/Card";
import Slide from "../../components/slide/Slide";

const Home = () => {
    return(
        <div className="home">
            <Featured/>
            <Slide slidesToShow={5} arrowsScroll={5}>
            {cards.map((card) => (
            <Card id={card.id} card = {card}></Card>
            ))}
            </Slide>
        </div>
    )
}

export default Home;