import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Result from './components/Result';
import Clock from './components/Clock';
import Cat from './components/Cat';
import Graph from './components/Graph';
import { runInThisContext } from 'vm';

class App extends Component {
  constructor(){
    super();

    this.state= {
      result: ''
    }
  }

  onClick= button => {
    if (button === '=') {
      this.calculate()
    }
    else if (button === 'C') {
      this.reset()
    }
    else if (button === 'CE') {
      this.backspace()
    }
    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };

  calculate= () => {
    try {
      this.setState({
        result: (eval(this.state.result) || '') + ''
      })
    } catch (e) {
      this.setState({
        result: 'error'
      })
    }
  };

  reset=() =>{
    this.setState({
      result: ''
    })
  };

  backspace= () => {
    this.setState({
      result: this.state.result.slice(0,-1)
    })
  };

  render() {
    return(
      <div>
        <Clock/>
        <Graph/>
        {/* <Cat/> */}
        <div className='calc'>
          <h1>Calculator</h1>
          <img src='http://diysolarpanelsv.com/images/joker-batman-clipart-4.png'/>
          <Result result={this.state.result}/>
          <Button onClick={this.onClick}/>
        </div>
      </div>
    )
  }
}
// function App() {
//   return (
//     <div>
      
//     </div>
//   );
// }

export default App;
