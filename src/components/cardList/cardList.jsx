import React from 'react';
import './cardList.css'
import Card from "../card/card";

const CardList = ({list}) => {
    return (
        <div className="card-list">
            {list.map((monster) => (
                <Card
                    key={monster.id}
                    id={monster.id}
                    name={monster.name}
                    email={monster.email}
                />
            ))}
        </div>
    );
};

export default CardList;
