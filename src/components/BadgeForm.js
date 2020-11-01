import React from 'react';

class BadgeForm extends React.Component {
    // state={};
    handleClick=e => {
        // console.log({
        //     name: e.target.name,
        //     value: e.target.value,
        // });
        this.setState({
            [e.target.name]: e.target.value,
            
        });
    };
    //este es el evento que arroja el boton simple al dar click
    handlebutton=e => {
        console.log(
           "El boton ha sido presionado"
        );
        console.log(this.state);

    };
    //estte es envia datos 
    handlesubmit=e => {
        
        console.log(
           "Los datos han sido enviados"
        );
        console.log(this.state);
    };
    render(){
        return(
            <div>               
                <h1>New Attendant</h1>

                    <form onSubmit={this.handlesubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                        onChange= {this.props.onChange} 
                        className="form-control"
                        type="text"
                        name="firstName"
                        value={this.props.formValue.firstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                        onChange= {this.props.onChange} 
                        className="form-control"
                        type="text"
                        name="lastName"
                        value={this.props.formValue.lastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input 
                        onChange= {this.props.onChange} 
                        className="form-control"
                        type="text"
                        name="jobTitle"
                        value={this.props.formValue.jobTitle}
                        />
                    </div>

                   
                    <button  onClick={this.handlebutton} className="btn btn-primary"> Save   </button>
                    </form>
            
        </div>
        )

    
    }

}
export default BadgeForm;