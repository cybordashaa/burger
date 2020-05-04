import React, { Component } from 'react';
import Burger from '../../components/Burger';

export class BurgerBuilder extends Component {
    state = {
        ingredeints: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        }
    }

    render() {
        return (
            <div>
                <Burger orts={this.state.ingredeints} />
                <div>Хачиртай талх</div>
                <div>Орцны удирдлага</div>
            </div>
        );
    }
}