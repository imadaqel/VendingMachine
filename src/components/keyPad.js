import React,{Component} from 'react';
import './keyPad.css'

export default class KeyPad extends Component{
    render(){
            console.log(this.props)
            var keys=[1,2,3,4,5,6,7,8,9]
        return(
            <div className="keypadContainer">
                {keys.map((number) =>
                <button key={number}
                value={number} onClick={()=>{this.props.setKey({number})}}>{number}
                </button> )}
                <br></br>
                <button value={''} onClick={this.props.resetKey}>cls</button>
            </div>
     )}
}