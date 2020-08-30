import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

import './Icon.css'


class Icon extends React.Component {
  constructor(props){
    super(props)

  }

  
  render() {
    return(
      <Draggable>
        <div className="icon">
          <img src = {process.env.PUBLIC_URL + this.props.image} alt='icon' draggable={false}></img>
          {this.props.name}
        </div> 
      </Draggable>
    )
  }

}


Icon.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  action: PropTypes.func
}

export default Icon
