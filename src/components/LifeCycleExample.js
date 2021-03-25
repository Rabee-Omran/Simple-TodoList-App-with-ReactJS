import { Component } from 'react';


class LifeCycleExample extends Component {


    constructor(){
        super()
        this.state = {
            time:new Date()
        }
    }
     
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                time:new Date()
            })
        },1000)
    }
 
    render(){
    
        return(
            
            <div>
             
                <h1>Time is : {this.state.time.toLocaleTimeString()}</h1>

            </div>
        );
    }

}

export default LifeCycleExample;
