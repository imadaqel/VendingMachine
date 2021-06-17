import React,{ Component } from 'react';
import './App.css';
import Coins from './components/coins';
import KeyPad from './components/keyPad';
import SnakSlots from './components/snakSlots';

class App extends Component {
  state={
    enteredKey:'',
    cash:0,
    screenAlarms:[]
  }
    setKey=({number})=>{
      if(this.state.enteredKey.length>1)return;
      this.setState({
          enteredKey:this.state.enteredKey+number
    })}
    resetKey=()=>{
      this.setState({
          enteredKey:this.state.enteredKey.slice(0, -1)
      })          
    }
    handleCash=({money})=>{
    if(money+this.state.cash===0.30000000000000004){
     this.setState({cash:0.3});
     this.setState({screenAlarms:[...this.state.screenAlarms,`You have entered ${money}$, The total cash now is ${0.3}$`]})
    }
    else{
      console.log(money)
      this.setState({cash:money+this.state.cash});
      this.setState({screenAlarms:[...this.state.screenAlarms,`You have entered ${money}$, The total cash now is ${money+this.state.cash}$`]})
    }
    }
    subKey=({selectedSnak})=>{
      if(this.state.enteredKey>25 ||this.state.enteredKey==='')this.setState({screenAlarms:[...this.state.screenAlarms,`There is no product with this id`]})
        else{
          this.setState({screenAlarms:[...this.state.screenAlarms,`This item is ${selectedSnak[1]} with price of ${selectedSnak[3]}$`]})
        }}
  subOrder=(e)=>{
    if(this.state.enteredKey>25 ||this.state.enteredKey==='')this.setState({screenAlarms:[...this.state.screenAlarms,`There is no product with this id`]})
    else if(e.selectedSnak[3]>this.state.cash)this.setState({screenAlarms:[...this.state.screenAlarms,`There is no enough money`]})
    else{
      this.setState({cash:this.state.cash-e.selectedSnak[3]});
      this.setState({screenAlarms:[...this.state.screenAlarms,`Successfull process,The rest Cash is ${this.state.cash-e.selectedSnak[3]}$`]})
      this.setState({enteredKey:""})}}
  render(){
   var [enteredKey]=[this.state.enteredKey]
    console.log(this.state.enteredKey,this.state.cash)
  return (
    <div className="App">
      <SnakSlots subOrder={this.subOrder} subKey={this.subKey} enteredKey={this.state.enteredKey}/>
      <div className="half">
      <KeyPad setKey={this.setKey} resetKey={this.resetKey}/>
      <div className="displayKey">
        <p>{`${enteredKey}`}</p>
      </div>
      <Coins handleCash={this.handleCash}/>
      <div className="screen">
        {this.state.screenAlarms.map((Alarm,index)=>
            <p key={index}>{Alarm}</p>
          )}
      </div>
      </div>
    </div>
  );
}}

export default App;
