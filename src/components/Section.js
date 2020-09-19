import React, { Component } from 'react'
import Products from './section/Products'
import Cart from './section/Cart'
import Payment from './section/Payment'
import Details from './section/Details'
import{Route} from 'react-router-dom'


export class Section extends Component {
    render() {
        return (
            <div>
                <section>
                    <Route  exact path="/" component={Products}/>
                    <Route  exact path="/product" component={Products}/>
                    <Route path="/product/:id" component={Details}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/payment" component={Payment}/>

                </section>
            </div>
        )
    }
}

export default Section
