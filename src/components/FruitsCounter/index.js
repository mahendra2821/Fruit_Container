import {Component} from 'react'

import './index.css'
class FruitsCounter extends Component {
  state = {
    mangoes: 0,
    bananas: 0,
  }

  increamentMangoes = () => {
    this.setState(prevState => {
      console.log(`${prevState.mangoes}`)
      return {mangoes: prevState.mangoes + 1}
    })
  }
  IncreamentBananas = () => {
    this.setState(prevState => {
      console.log(`${prevState.bananas}`)
      return {bananas: prevState.bananas + 1}
    })
  }

  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="container">
        <div className="first_border">
          <h1 className="heading">
            Bob ate <span className="element">{mangoes}</span> mangoes
            <span className="element"> {bananas}</span> bananas
          </h1>
          <div className="img_s">
            <div className="single-img">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                className="images_names"
                alt="mango"
              />
              <button
                className="button"
                type="button"
                onClick={this.increamentMangoes}
              >
                Eat Mangoes
              </button>
            </div>
            <div className="single-img">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                className="images_names"
                alt="banana"
              />
              <button
                className="button"
                type="button"
                onClick={this.IncreamentBananas}
              >
                Eat Bananas
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
