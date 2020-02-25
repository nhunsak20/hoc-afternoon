import React, { Component } from 'react';
import ExchangeCurrency from './Components/CurrencyConverter'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>HOC Currency</h1>
        <ExchangeCurrency />
      </div>
    );
  }
}

export default App;
