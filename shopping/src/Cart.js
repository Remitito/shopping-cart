import './App.css';
import React, {Component} from "react"
import NewCartItem from './CartItems'
import Shop from './Shop'

export default class Cart extends Component {
    render() {
        let items = this.props.currentCart;
        let cart = []
        let total = 0
        for (let i = 0; i < items.length; i++) {
            total += items[i].added * items[i].price
            if (items[i].added !== 0) {
                cart.push(items[i])
            }
        }

        return (
            <div id="cartCont"> 
                <h1 className="headers">Shopping Cart</h1>
                <p style={{color: 'white', fontSize: 30}}>Total Cost: {total.toFixed(2)}</p>
                <div id="shopList" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', width: '1000px'}}>
            {cart.map((item, index) => {
                return (
                    <NewCartItem key={"new" + index} number={item.no} altDesc={item.altDesc} quant={item.added}
                     desc={item.desc} price={item.price} choice={index} clickFunc={this.props.delFunc} clickFuncAdd={this.props.addFunc} image={item.image}/>
                )
            })}
            </div>
                </div>
        )
    }
}