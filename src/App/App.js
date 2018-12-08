import React, { Component } from 'react';
import Header from './Header/Header'
import Main from './Main/Main'
import Aside from './Aside/Aside'
import Footer from './Footer/Footer'
import {Route} from 'react-router-dom'
import FATW1 from './Main/MainLeft/MainLeftBlocks/FATWblocks/FATW1'

class App extends Component {
  render() {
    return (
      <div className="App"> 
          <div className="wrap both">
          <Header/>
          <Route path="/" exact render={() => {
            return(<Main/>)
          }}/>
          <Route path="/FATW1" render={() => {
            return(<FATW1/>)
          }}/>
          <Route path="/FATW2" render={() => {
            return(<FATW1/>)
          }}/>
          <Route path="/FATW3" render={() => {
            return(<FATW1/>)
          }}/>
          <Aside/>
     </div>
          <Footer/>
    </div>
      
    );
  }
}

export default App
