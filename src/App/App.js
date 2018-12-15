import React, { Component } from 'react';
import Header from './Header/Header'
import Main from './Main/Main'
import Aside from './Aside/Aside'
import Footer from './Footer/Footer'
import {Route} from 'react-router-dom'
import FATWPage from './Main/FATWPage';

class App extends Component {
  render() {
    return (
      <div className="App"> 
          <div className="wrap both">
          <Header/>
          <Route path="/" exact render={() => {
            return(<Main/>)
          }}/>
          <Route path="/FATW/:FATWId" component={FATWPage}/>
          
          <Aside/>
     </div>
          <Footer/>
    </div>
      
    );
  }
}

export default App
