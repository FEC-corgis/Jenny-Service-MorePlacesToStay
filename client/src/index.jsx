import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Wrapper from './Wrapper.jsx'
import HouseArray from './HouseArray.jsx'
import House from './House.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      top12: [],
    }
    this.arrowLeft = this.arrowLeft.bind(this)
    this.arrowRight = this.arrowRight.bind(this)
  }
  arrowLeft() {
    console.log('left clicked')
  }
  arrowRight() {
    console.log('right clicked')
  }
  componentDidMount() {
    console.log('didmount up')
    axios('/test')
    .then(res =>{
      console.log(res.data)
      this.setState({
        top12: res.data,
      })
    })
  }
  render() {
    if (this.state.top12.length === 0) {
      return null
    } else {
      return (
        <div className="carousel">

          <div className="title">More places to stay</div>

          <div className="buttons">
          <button onClick={this.arrowLeft}>{'<'}</button>
          <button onClick={this.arrowRight}>{'>'}</button>
          </div>

          <div className="wrapper">
          <Wrapper top12={this.state.top12}/>
          </div>

        </div>
      )
    }
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))