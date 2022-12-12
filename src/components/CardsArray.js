import React from "react";
import Card from "./Card";
import uniqid from 'uniqid';

const CardsArray = ({ robots }) => {
    return (
        <div> 
            {
                robots.map((user, i) => {
                    return (
                        <Card
                            key={uniqid()} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email} 
                        />
                    );
                }) 
            }    
        </div>
    );
}

export default CardsArray;