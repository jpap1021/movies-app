import React from 'react';
import './header.css'
class Header extends React.Component{
    render(){
        return(
          <div className="header-component">
              <div className="title-home">
              <a href="#">Home</a>
              </div>
              <div className="title-listfavorites">
              <a href="#">List favorites</a>
              </div>
          </div>

        );
    }

}

export default Header;