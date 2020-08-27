import PropTypes from 'prop-types'
import React from 'react'

import './Icon.css'

const icon = ({image, name, action}) => (
  <div className="icon">
    <img src = {process.env.PUBLIC_URL + image} alt='icon'></img>
        {name}
  </div>
)

HallOfFame.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  action: PropTypes.func
}

export default icon
