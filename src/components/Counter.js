import { Component } from 'react';
import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';




const Counter = () => {
  const count = useSelector(state => state.counter)
  const dispatch = useDispatch()


  const incrementHandler = () => {
    dispatch({ type: 'increment' });


  };
  const decrementHandler = () => {
    dispatch({ type: 'decrement' });

  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value} >{count}</div>
      <div className='counter'>
        <button onClick={incrementHandler}>increment</button>

        <button onClick={decrementHandler}>decrement</button>
      </div>


    </main>
  );
};

// class counter extends Component {

//   incrementHandler(){}

//   decrementHandler(){}




//   render() {

//     return (<main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value} >{count}</div>
//       <div className='counter'>
//         <button onClick={this.incrementHandler}>increment</button>

//         <button onClick={this.decrementHandler}>decrement</button>
//       </div>


//     </main>)
//   }

// }

export default Counter;
