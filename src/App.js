import React, { Component } from 'react';
import Router from './Router'
import Navbar from './components/Navbar'


class App extends Component {
  state = {
    activeMenu: ''
  }

  menuClick = (e, { name }) => {
    this.setState({ activeMenu: name })
  } 

  render() {
    let { activeMenu } = this.state
    return (
      <div>
        <Navbar activeMenu={activeMenu} menuClick={this.menuClick}/>
        <Router />
      </div>  
    );
  }
}

export default App;
