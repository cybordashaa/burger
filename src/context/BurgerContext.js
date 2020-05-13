import React, { useState } from 'react';

const BurgerContext = React.createContext();

export const BurgerStore = props => {
    const [ingredients, setIngredients] = useState({
        salad: 0,
        cheese: 0,
        bacon: 0,
        meat: 0
    });

    const addIngredient = (orts) => {
        console.log('add ...');

    }

    const removeIngredient = (orts) => {
        console.log('remove ...');

    };

    return (
        <BurgerContext.Provider value={ingredients, addIngredient, removeIngredient}>{props.children}</BurgerContext.Provider>
    )

};


export default BurgerContext;