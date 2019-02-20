import React from 'react'
import Logo from  '../../assets/logo.png';
const Header = () => {
 return (
       <header data-test="headerComponent">
       <div data-test="wrap">
            <div data-test="logo">
                 <img src={Logo} alt="Logo" data-test="logoIMG"/>
            </div>
       </div>
       </header>
    );
}

export default Header