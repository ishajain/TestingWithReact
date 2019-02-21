import React from 'react'
import Header from './header'
import Headline from './headline'
import './styles.scss'

const tempArray = [
  {
    lName : 'jain',
    fName : 'isha',
    age : '34',
    email : 'isha.jain30@gmail.com',
    onlineStatus : true
  }
];

class App extends React.Component
{
  
  render(){
      return(
          <div className="app">
              <Header/> 
              <section className="main">
              <Headline temp = {tempArray} header={1} description="Click the button to fetch all the posts."/>
              </section>
          </div>
              );
  }
}

export default App;