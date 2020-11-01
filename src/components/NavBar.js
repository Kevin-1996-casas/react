import React from 'react';
import logo from './images/badge-header.svg';
import '/home/kevin/hello-react/src/components/styles/NavBar.css';
import './styles/Badge.css';
class NavBar extends React.Component{
    render(){
        return(<div className="NavBar">
            <a className="Navbar__brand" href="/">
                <img className="imgstop" src={logo}/>
                <span className=""> PLATZI</span>
                <span>conf</span>
            </a>
        </div>
        )
              
        
    }
}

export default NavBar;