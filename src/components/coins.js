import React,{Component} from 'react';
// import SnakSlots from './snakSlots';

 export default class Coins extends Component{
   state={
    creditcard:0,
   }
    changeCreditCard=(e)=>{
        // e.preventDefault()
        this.setState({creditcard:+e.target.value}
            )}
    render(){
        var coinSlots=[0.1,0.20,0.50,1];
        var NoteSlot=[20,50];
        console.log(this.state.creditcard)
        return(
            <>
                <div className="coinsContainer">
                    <div className="coin">
                        {coinSlots.map((number) =>
                        <button key={number}
                            value={number} onClick={()=>{this.props.handleCash({money:number})}}>{`${number*100}c`}
                        </button> )}
                    </div>
                    <div className="NoteSlot">
                        {NoteSlot.map((number) =>
                        <button key={number}
                        value={number} onClick={()=>{this.props.handleCash({money:number})}}>{`${number}$`}
                        </button> )}
                    </div>
                    <div className="CreditCard">
                        <input type="number" onChange={this.changeCreditCard} ></input>
                        <button onClick={()=>{this.props.handleCash({money:this.state.creditcard})}} className="card-submit">Submit cash</button>
                    </div>
                </div>
          </>
         )}

}