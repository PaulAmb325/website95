import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

import './Icon.css'


class Icon extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      x: this.props.x, 
      y : this.props.y
  };
  }

  
  render() {
    return(
      <Draggable bounds="parent" defaultPosition={{x: this.state.x, y: this.state.y}}>
        <div className="icon">
          <img src = {process.env.PUBLIC_URL + this.props.image} alt='icon' draggable={false}></img>
          <p>{this.props.name}</p>
        </div> 
      </Draggable>
    )
  }

}


Icon.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  action: PropTypes.func,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
}

export default Icon
