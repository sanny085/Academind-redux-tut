import React, { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const select = useSelector((state) => state);

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const incrementTen = () => {
    dispatch({ type: "INCREMENTBYTEN", payload: 10 });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const ToggleCard = () => {
    dispatch({ type: "Animation" });
  };
  console.log("redux data", select);
  return (
    <div style={{ position: "relative", padding: "10px" }}>
      {select.showCounter && (
        <div
          style={{
            width: "100%",
            height: "auto",
            backgroundColor: "lightcoral",
          }}
        >
          <h2>Counter App</h2>

          <h3 style={{ color: "blue" }}>{select.count}</h3>
          <button onClick={decrement} style={{ margin: "15px" }}>
            --
          </button>
          <button onClick={() => increment()} style={{ margin: "15px" }}>
            ++
          </button>
          <button onClick={() => incrementTen()} style={{ margin: "15px" }}>
            ++10
          </button>
        </div>
      )}
      <button
        onClick={() => ToggleCard()}
        style={{ position: "fixed", top: "40%", textAlign: "center" }}
      >
        Toggle Card
      </button>
    </div>
  );
};
export default Counter;

// class Counter extends Component{
//     constructor(props){
//        super(props)
//     }

//     decrementHandler (){
//         this.props.decrement()
//     }
//     incrementHandler (){
//         this.props.increment()
//     }
//     incrementTenHandler (){
//         this.props.incrementTen()
//     }

//     render(){
//         return(
//         <div>
//             {
//                 console.log("Props value",this.props)
//             }
//             <h2>Counter App</h2>
//             <h3 style={{color: 'blue'}}>{this.props.select}</h3>
//             <button onClick={this.decrementHandler.bind(this)} style={{margin: '15px'}}>--</button>
//             <button onClick={this.incrementHandler.bind(this)} style={{margin: '15px'}}>++</button>
//             <button onClick={this.incrementTenHandler.bind(this)} style={{margin: '15px'}}>++10</button>
//         </div>
//         )
//     }
// }

//  const mapStateToProps = state => {
//      return {
//         select : state.count
//     };
//  }
//  const mapDispatchToProps = dispatch => {
//     return {
//         decrement : () => dispatch({type: 'DECREMENT'}),
//         increment : () => dispatch({type: 'INCREMENT'}),
//         incrementTen : () => dispatch({type: 'INCREMENTBYTEN', payload: 10}),

//     };
//  }

// export default connect(mapStateToProps,mapDispatchToProps)(Counter)
