import React, {Component} from 'react';
import data from './data'


class Main extends Component{

 
constructor(){
    super();

    this.state = {
        data:data
    };

    
}


dataList =() => {
    for (let i = 0; i < data.length; i++){
        console.log(this.dataList)
    }
}

render(){

    const Main = (props) => {
        console.log(props)}

    return(
      <div className = 'main'>
          
      </div>)
    
  }
   
};
// h props.name
// h props.x


export default Main;