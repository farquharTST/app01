import React, { Component } from 'react';
// import logo from './logo.svg';
import './css/App.css';
import AppHeader from './components/appHeader.jsx'
import AppBody from './components/appBody.jsx'
import AppFooter from './components/appFooter.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">

        <AppHeader />
        <AppBody />
        <AppFooter />

      </div>
    );
  }
}

export default App;
