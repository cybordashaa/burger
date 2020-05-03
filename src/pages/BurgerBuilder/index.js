import React, { Component} from 'react';
import Burger from '../../components/Burger';

 export class BurgerBuilder extends Component{

    render(){
        return (
            <div>
                <Burger/>
                <div>Хачиртай талх</div>
                <div>Орцны удирдлага</div>
            </div>
        );
    }
}