import React from 'react'
import Header from './header'
import Headline from './headline'
import './styles.scss'

class App extends React.Component
{
  render(){
      return(
          <div className="app">
              <Header/> 
              <section className="main">
              <Headline header="Posts" description="Click the button to fetch all the posts."/>
              </section>
          </div>
              );
  }
}

export default App;