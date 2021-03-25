import { Component } from 'react';


class List extends Component {

     
  
 
    render(){
       const years = [2000,2005,2010,2015,2021]
        return(
            
            <div>
               <ul>
                   {years.map((item)=>{
                      return  item > 2005 ? <li key={item}>{item}</li> : null
                   })}
               </ul>


            </div>
        );
    }

}

export default List;
