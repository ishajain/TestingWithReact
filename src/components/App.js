import React from 'react'
import Header from './header'
import './styles.scss';
class App extends React.Component
{
  render(){
      return(
          <div className="app">
              <Header/> 
          </div>
              );
  }
}

export default App;