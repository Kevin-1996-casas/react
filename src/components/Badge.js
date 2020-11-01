import React from 'react';
import img from './images/calidad.png';
import './styles/Badge.css';
class Badge extends React.Component{
    render(){
        const {
            firstName,
            lastName,
           
            jobTitle,
            
            } = this.props;
        return(
            <div className="Badge">
                <div className="Badge__header"> <img className="imgstop" src={img} alt="Logo de la "></img></div>
                <div className="Badge__section-name"> 
                    <img className="Badge__avatar" src="https://soycalidad.com/wp-content/uploads/2020/09/kevin.jpg" alt="Avatar"></img>
        <h1>{firstName} <br></br>{lastName}</h1>
                </div>
                
                <div className="Badge__section-info"><h3>{jobTitle}</h3></div>

                
            </div>
        )
    }
}

export default Badge;