import React, { useState }from 'react';
import {Avatar, Button, Cutout, Fieldset, Panel, TextField } from 'react95';

import './Projects_Wind.css'
 
function Projects_Wind() {
    const [state, setState] = useState({
        value: ''
      });
      
    const handleChange = e => setState({ value: e.target.value });

    return (
        <div>
        <TextField
            value={state.value}
            placeholder='Search'
            onChange={handleChange}
        />

        </div>
  
  );
}
 
export default Projects_Wind;