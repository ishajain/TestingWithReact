import React from 'react'

class Headline extends React.Component{
 render(){
     const {header,description} = this.props
     return(
         <div data-test="headerComponent">
             <h1 data-test="header">{header}</h1>
             <p data-test="description">{description}</p>
         </div>
     );
 }

}

export default Headline;