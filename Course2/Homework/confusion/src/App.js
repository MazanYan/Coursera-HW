import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import MenuComponent from './components/MenuComponent';
import {DISHES} from './shared/Dishes.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {dishes: DISHES};
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <MenuComponent dishes={this.state.dishes}/>
      </div>
    );
  }
}

export default App;
