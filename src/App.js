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
  editQuantity = (snaksItems, item) => {
    console.log("editQuantity",item)
    let chosedSnack = snaksItems[this.state.enteredKey-1]
    if (chosedSnack[2] === 0) {
      return null
    }
    chosedSnack[2] = chosedSnack[2] - 1
    return chosedSnack

  }
    setKey=({number})=>{
      if(this.state.enteredKey.length>1)return;
      else if(this.state.enteredKey+number>25)return;
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
    subKey=({selectedSnak},enteredKey=this.state.enteredKey)=>{
      if(enteredKey>25 ||enteredKey==='')this.setState({screenAlarms:[...this.state.screenAlarms,`There is no product with this id`]})
        else{
          this.setState({screenAlarms:[...this.state.screenAlarms,`This item is ${selectedSnak[1]} with price of ${selectedSnak[3]}$`]})
        }}
        subOrder = (selectedSnak, snaksItems, setQuantity) => {
          console.log(snaksItems,setQuantity)
          if (this.state.enteredKey > 25 || this.state.enteredKey === '') this.setState({ screenAlarms: [...this.state.screenAlarms, `There is no product with this id`] })
          else if (selectedSnak[3] > this.state.cash) this.setState({ screenAlarms: [...this.state.screenAlarms, `There is no enough money`] })
          else {
            let newQuantity = this.editQuantity(snaksItems, selectedSnak)
            if (!newQuantity) {
              alert("No quantity")
              return
            }
            setQuantity({ snaksItems: newQuantity })
            this.setState({ cash: this.state.cash - selectedSnak[3] });
            this.setState({ screenAlarms: [...this.state.screenAlarms, `Successfull process,The rest Cash is ${this.state.cash - selectedSnak[3]}$`] })
            this.setState({ enteredKey: "" })
            this.setState({ cash: 0 })
          }
        }
  render(){
   var [enteredKey]=[this.state.enteredKey]
    console.log(this.state.enteredKey,this.state.cash)
  return (
    <div className="App">
      <SnakSlots editQuantity={this.editQuantity} subOrder={this.subOrder} subKey={this.subKey} enteredKey={this.state.enteredKey} cash={this.state.cash}/>
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
