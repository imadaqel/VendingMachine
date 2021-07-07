
import React,{Component} from 'react';
const { snakImages } = require('./snakImages');

export default class SnakSlots extends Component{
  constructor(props) {
  super(props)
  this.state={
    snaksItems:
                [[1,"Cola",10,5],[2,'Marshmello',2,4],[3,'Sweet',4,1],[4,'GirlHair',5,2],[5,'Water',0,0.5]
                ,[6,"Cola",10,5],[7,'Marshmello',2,4],[8,'Sweet',4,1],[9,'GirlHair',5,2],[10,'Water',0,0.5]
                ,[11,"Cola",10,5],[12,'Marshmello',2,4],[13,'Sweet',4,1],[14,'GirlHair',5,2],[15,'Water',0,0.5],
                [16,"Cola",10,5],[17,'Marshmello',2,4],[18,'Sweet',4,1],[19,'GirlHair',5,2],[20,'Water',0,0.5],
                [21,"Cola",10,5],[22,'Marshmello',2,4],[23,'Sweet',4,1],[24,'GirlHair',5,2],[25,'Water',0,0.5]]
  }}
 render(){
    console.log(this.state.snaksItems)
     return(
    <div className="snakSlot">
      <div className="container">
        {this.state.snaksItems.map((item,i) =>
            <div className="snaksItems" key={i} style={{width:'200px'}}>
                <img className="card-img-top" src={snakImages[i]} alt="Cardimagecap"style={{width:'180px', height:"90px"}}/>
                <div className="card-body">
                    <h5 className="card-title">{`id:${item[0]}`}</h5>
                    <h5 className="card-title">{`Quantity :${item[2]}`}</h5>
                    <h5 className="card-title">{`${item[1]} ,Price:${item[3]}$`}</h5>
                
                </div>
            </div>
            )}
      </div>
          <div className="subButtons">
            {/* this.greeting({key:this.props.enteredKey-1}) */}
            <button onClick={() => this.props.subOrder( this.state.snaksItems[this.props.enteredKey - 1], this.state.snaksItems,()=>this.setState())}>subOrder</button>
          <button onClick={()=>this.props.subKey({selectedSnak:this.state.snaksItems[this.props.enteredKey-1]})}>subKey</button>
            </div>
     </div>     
     )
 }
}