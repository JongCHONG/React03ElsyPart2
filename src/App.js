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
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000
    }
  }
  
  onHeartChange = (e) => {
    this.setState({heart: e.target.value})
  }
  onTemperatureChange = (e) => {
    this.setState({temperature: e.target.value})
  }
  onStepsChange = (e) => {
    this.setState({steps: e.target.value})
  }
  calculatewater = () => {
    let toDrink = 0
    if (this.state.temperature > 20) {
      for (let i = 20; i <= tempMax; i++) {
        toDrink = toDrink + 0.02
      }
    }
    console.log(toDrink)
    this.setState({water: toDrink})
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
            onChange={this.onStepsChange}
          />
          
          {/* Heart */}
          <Box 
            icon="favorite" 
            color="red" 
            value={this.state.heart} 
            unit="bpm" 
            min={heartMin} 
            max={heartMax} 
            onChange={this.onHeartChange}
          />
          
          {/* Temperature */}
          <Box 
            icon="wb_sunny" 
            color="yellow" 
            value={this.state.temperature} 
            unit="°C" 
            min={tempMin} 
            max={tempMax} 
            onChange={this.onTemperatureChange}
          />
        </div>
      </div>
    )
  }
}

export default App