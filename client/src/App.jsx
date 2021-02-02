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
      array: 0,
      transform: 0,
    }
    this.arrowLeft = this.arrowLeft.bind(this)
    this.arrowRight = this.arrowRight.bind(this)
  }
  arrowLeft() {
    if (this.state.array === 2 || this.state.array === 1) {
      this.setState({
        array: this.state.array - 1,
        transform: this.state.transform + 125,
      })
     } else {
        this.setState({
          array: 2,
          transform: -250
        })
      }
    }
  arrowRight() {
    if (this.state.array === 0 || this.state.array === 1) {
      this.setState({
        array: this.state.array + 1,
        transform: this.state.transform - 125,
      })
     } else {
        this.setState({
          array: 0,
          transform: 0
        })
      }
  }
  componentDidMount() {
    axios('/morePlaces/propId/5')
    .then(res =>{
      console.log(res.data)
      this.setState({
        top12: res.data
        // top12: [res.data[0]],
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
          <Wrapper
          top12={this.state.top12}
          array={this.state.array}
          transform={this.state.transform}
          />
          </div>
          carousel index: {this.state.array}
          <br/>transform: {this.state.transform}
        </div>
      )
    }
  }
}

export default App;