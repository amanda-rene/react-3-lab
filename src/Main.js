import React, {Component} from 'react';
import data from './data'


class Main extends Component{

 
constructor(){
    super();

    this.state = {
        data:data,
        i: 0
    };

    
}


// dataList =() => {
//     for (let i = 0; i < data.length; i++){
        
//     }
// }

render(){

  const dataMap = this.state.data.map( data => {
      return ( <div>{data.name.first} </div>)
  })

    return(
      <div className = 'main'>
          {this.state.data[this.state.i].name.first}
          <br></br>
          {this.state.data[this.state.i].name.last}
          <br></br>
          {this.state.data[this.state.i].city}
          <br></br>
          {this.state.data[this.state.i].country}
          <br></br>
          {this.state.data[this.state.i].employer}
          <br></br>
          {this.state.data[this.state.i].title}
          <br></br>
          {this.state.data[this.state.i].favoriteMovies}
      </div>)
    
  }
   
};
// h props.name
// h props.x


export default Main;