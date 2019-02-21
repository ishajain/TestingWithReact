import React from 'react'
import PropTypes from 'prop-types';
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

Headline.propTypes = {
    header: PropTypes.string,
    description: PropTypes.string,
    temp : PropTypes.arrayOf(PropTypes.shape({
        fNname : PropTypes.string,
        lName:PropTypes.string,
        age: PropTypes.number,
        email : PropTypes.email,
        onlineStatus : PropTypes.bool
    }))
}

export default Headline;




