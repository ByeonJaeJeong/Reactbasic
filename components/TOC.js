import { Component } from "react";
import App from "../App";

class TOC extends Component{
  render(){
    var lists=[];
    var data= this.props.data;
    var i =0;
    while(i < data.length){
      lists.push(<li><a 
        href={"/content/"+data[i].id}
        onClick = {function(e){
          this.setState({
            mode: 'read'
          });
          e.preventDefault();
        }.bind(App)}  
      >{data[i].title}</a></li>);
      i+=1;
    }
      return(
        <nav>
           <ul>
             {lists}
           </ul>
        </nav>
      );
  }
  }

 export default TOC;