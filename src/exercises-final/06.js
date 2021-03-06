// Interact with the DOM
import React from 'react'
import VanillaTilt from 'vanilla-tilt'

class Tilt extends React.Component {
  rootRef = React.createRef()
  componentDidMount() {
    VanillaTilt.init(this.rootRef.current, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    })
  }
  render() {
    return (
      <div ref={this.rootRef} className="tilt-root">
        <div className="tilt-child">{this.props.children}</div>
      </div>
    )
  }
}

function Usage() {
  return (
    <div className="totally-centered">
      <Tilt>
        <div className="totally-centered">vanilla-tilt.js</div>
      </Tilt>
    </div>
  )
}
Usage.title = 'Interact with the DOM'

export default Usage
