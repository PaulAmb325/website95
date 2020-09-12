import PropTypes from 'prop-types'
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

import { Window, WindowHeader, WindowContent,Tabs, Tab, TabBody, Fieldset, Checkbox, NumberField, Button } from 'react95';

import './Window_comp.css'


function Window_comp(id,closeWindow) {

    return(
    <div className = "window">
    <Draggable handle='.windows-header' defaultPosition={{x: 10, y: 10}} bounds = '.desktop'>
        <Window style={{ width: 350 }}>
            <WindowHeader className="windows-header">
                Settings
                <div className='states'>
                    <Button square={true} className='button'>
                    _
                    </Button>
                    <Button square={true} className='button'>
                    C
                    </Button>
                    <Button onClick={() => closeWindow(id)}>
                    X
                    </Button>
                </div>  
            </WindowHeader>
            <WindowContent>
                Ici on met le contenu que l'on veut en fct de l'id
            </WindowContent>
        </Window>
    </Draggable>         
    </div> 
    );
}

export default Window_comp