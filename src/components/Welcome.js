import { Component } from 'react';


class Welcome extends Component {

    state= {
        name :{
            firstName:'Rabee',
            lastName:'Omran'
        }
    }

    firstNameHandler(event){
       this.setState({
           name :{
               ...this.state.name,
               firstName: event.target.value
           }
       })

    }

    lastNameHandler(event){
        this.setState({
            name :{
                ...this.state.name,
                lastName: event.target.value
            }
        })
 
     }
 
    render(){
        return(
            
            <div>
                <h1>{`${this.state.name.firstName} ${this.state.name.lastName}`}</h1>
                <br/><span>First Name :</span> <input type='text' onChange={this.firstNameHandler.bind(this)} />
                <br/><span>Last Name :</span> <input type='text'  onChange={this.lastNameHandler.bind(this)} />


            </div>
        );
    }

}

export default Welcome;
