import './App.css';
import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './Nav'
import Shop from './Shop'
import Cart from './Cart'
import Spacesuit from './spacesuit.jpg'
import Rocket from './rocket.jpg'
import Robot from './robot.jpg'
import Satellite from './satellite.jpg'
import Mars from './mars.jpg'
import AlienTee from './alientee.jpg'
import About from './About'

class Home extends Component {
  constructor() {
    super()
    this.state = {items: [
      {no: 0, title: 'Spacesuit', price: 999.99, image: Spacesuit, altDesc: "A spacesuit", desc: "Lets you breathe", added: 0},
      {no: 1, title: 'Robot', price: 19000, image: Robot, altDesc: "A robot", desc: "Helps you in space", added: 0},
      {no: 2, title: 'Rocket', price: 999999, image: Rocket, altDesc: "A rocket", desc: "Gets you to space", added: 0},
      {no: 3, title: 'Satellite', price: 999999, image: Satellite, altDesc: 'A satellite', desc: "Orbits stars", added: 0},
      {no: 4, title: 'Alien Tee', price: 19.99, image: AlienTee, altDesc: 'Alien t-shirt', desc: 'A cool t-shirt', added: 0},
      {no: 5, title: 'Land on Mars', price: 150000, image: Mars, altDesc: 'Land on Mars', desc: '1 square KM on Mars', added: 0}
  ], totalItems: 0};
  }

  addToCart = (e) => {
    let items = [...this.state.items];
    let item = {...items[e.target.value]};
    item.added = item.added + 1;
    items[e.target.value] = item;
    this.setState({items, totalItems: this.state.totalItems + 1});
  }

  delFromCart = (e) => {
    let items = [...this.state.items];
    let item = {...items[e.target.value]};
    item.added = item.added - 1 
    items[e.target.value] = item;
    this.setState({items, totalItems: this.state.totalItems - 1});
  }

  render() {
  return (
    <Router>
    <div>
      <Nav total={this.state.totalItems}/>
      <Switch>
        <Route exact path="/" component={About}/>
        <Route exact path="/shop" render={props => (<Shop {...props} addCart={this.addToCart} items={this.state.items}/>)}/>
        <Route exact path="/cart" render={props => (<Cart {...props} currentCart={this.state.items} delFunc={this.delFromCart} addFunc={this.addToCart}/>)}/>
      </Switch>
    </div>
    </Router>
  );
}
}

export default Home;
