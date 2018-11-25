import React, { Component } from 'react';
import Header from './Header/Header'
import Main from './Main/Main'
import Aside from './Aside/Aside'
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App"> 
          <div className="wrap both">
          <Header/>
          <Main/>
          <Aside/>
     </div>
          <Footer/>
    </div>
      
    );
  }
}

export default App
