import React, {Component} from 'react'
import Spacesuit from './spacesuit.jpg'
import Rocket from './rocket.jpg'
import Robot from './robot.jpg'
import Satellite from './satellite.jpg'
import Mars from './mars.jpg'
import AlienTee from './alientee.jpg'
import NewItem from './Items'
import Cart from './Cart'

export default class Shop extends Component {
    render() {
    return(
        <div id="shopMain">
            <h1 className="headers">Shop</h1>
            <div id="shopList" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', width: '1000px'}}>
            {this.props.items.map((item, index) => {
                return (
                    <NewItem key={index} title={item.title} altDesc={item.altDesc}
                     desc={item.desc} price={item.price} choice={index} clickFunc={this.props.addCart} image={item.image}/>
                )
            })}
            </div>
            <div>
        </div>
        </div>
    )
        }
}