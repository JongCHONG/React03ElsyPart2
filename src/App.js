import React from "react"

import "./styles/global.css"
import Box from "./components/Box"

const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000

class App extends React.Component {
  constructor() {
    super ()

    this.state = {
      water: 1.5,
      heart: 120,
      temperature: -10,
      steps: 3000
    }
    //this.onHeartChange = this.onHeartChange.bind(this)
  }
  
  onHeartChange = (e, action) => {
    this.setState({heart: e.target.value})
    this.calculatewater(e.target.value, action)
  }
  onTemperatureChange = (e, action) => {
    this.setState({temperature: e.target.value})
    this.calculatewater(e.target.value, action)
  }
  onStepsChange = (e, action) => {
    this.setState({steps: e.target.value})
    this.calculatewater(e.target.value, action)
  }
  calculatewater = (temp, action) => {
    console.log(action);
    let toDrink = 0

    if (action === "action-temp") { //pas obligatoire le if
      if (this.state.temperature > 20) {
        toDrink += (temp - 20) * 0.02
      }
    }
    if (action === "action-heart") { //pas obligatoire le if
      if (this.state.heart > 120) {
        toDrink += (temp - 120) * 0.008
      }
    }
    if (action === "action-steps") { //pas obligatoire le if
      if (this.state.steps > 10000) {
        toDrink += (temp - 10000) * 0.00002
      }
    }
    console.log(toDrink)
    this.setState({water: this.state.water + toDrink})
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* Water */}
          <Box 
            icon="local_drink" 
            color="#3A85FF" 
            value={this.state.water} 
            unit="L" 
          />

          {/* Steps */}
          <Box 
            icon="directions_walk" 
            color="black" 
            value={this.state.steps} 
            unit="steps" 
            min={stepsMin} 
            max={stepsMax} 
            onChange={(e) => this.onStepsChange(e, "action-steps")}
          />
          
          {/* Heart */}
          <Box 
            icon="favorite" 
            color="red" 
            value={this.state.heart} 
            unit="bpm" 
            min={heartMin} 
            max={heartMax} 
            onChange={(e) => this.onHeartChange(e, "action-heart")}
          />
          
          {/* Temperature */}
          <Box 
            icon="wb_sunny" 
            color="yellow" 
            value={this.state.temperature} 
            unit="°C" 
            min={tempMin} 
            max={tempMax} 
            onChange={(e) => this.onTemperatureChange(e,"action-temp")}
          />
        </div>
      </div>
    )
  }
}

export default App