import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '/home/kevin/hello-react/src/components/images/badge-header.svg';
import NavBar from '../components/NavBar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
class BadgeNew extends React.Component{
    state= {form:{
        firstName:'',
        lastName:'',
        jobTitle:'',
    }}; 
    handleChange=e=>{
        // const nextForm= this.state.form
        // nextForm[e.target.name]=e.target.value;
        this.setState({
            form:{
                ...this.state.form,
            [e.target.name]:e.target.value,
            }
            // form: nextForm,
        })
            
        
    };
    render(){
        return(
        <div>
            <NavBar></NavBar>
            <div className="BadgeNew__hero" >
                
                <img src={logo} alt="logo"></img>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge 
                        firstName={this.state.form.firstName}   
                        lastName={this.state.form.lastName}   
                        jobTitle={this.state.form.jobTitle}   >

                        </Badge>

                    </div>
                    <div className="col-6">
                        <BadgeForm 
                        onChange={this.handleChange} 
                        formValue={this.state.form}></BadgeForm>
                    </div>
                </div>
            </div>
        </div>
            )
        
              
        
    }
}

export default BadgeNew;