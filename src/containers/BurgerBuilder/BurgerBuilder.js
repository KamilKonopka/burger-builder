import React, { Component } from 'react';
import Auxilliary from '../../hoc/Auxilliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    state = {  }
    render() { 
        return (
            <Auxilliary>
                <Burger />
            </Auxilliary>
        );
    }
}
 
export default BurgerBuilder;