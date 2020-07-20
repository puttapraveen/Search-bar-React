import React,{Component} from 'react';
import './App.css';
import Data from "./Data.js"
import Cards from "./Cards.js"

class App extends Component{
  constructor(){
    super()
    this.state={
      monsters:[],
      search:""
    }
    this.handleChange=this.handleChange.bind(this)
  }
  handleChange(event){
    this.setState({
        search:event.target.value
    })
  }
  componentDidMount(){
  this.setState({monsters:Data});
  }
  render(){
    const {monsters,search}=this.state;
    const filtered=monsters.filter(mon=>mon.name.toLowerCase().includes(search.toLowerCase()))

    return(
    <div className="whole">
      <div className="Header">
        <input type="search" placeholder="Search For Monsters" onChange={this.handleChange}/>
        </div>
        <div className="Cards-show">
          <Cards monsters={filtered}/>
        </div>
    </div>
    )
  }
}

export default App;
