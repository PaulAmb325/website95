import PropTypes from 'prop-types'
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

import { Window, WindowHeader, WindowContent,Tabs, Tab, TabBody, Fieldset, Checkbox, NumberField, Button } from 'react95';

import './Settings.css'
import App from './App';

function Settings({openSettings}) {

    
    const [state, setState] = useState({      
        activeTab: 0
    });
      
    const handleChange = (e, value) => setState({ activeTab: value });
      
    const { activeTab } = state;

    return(
    <div className = "setting">
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
                    <Button>
                    X
                    </Button>
                </div>  
            </WindowHeader>
            <WindowContent>
                <Tabs value={activeTab} onChange={handleChange}>
                    <Tab value={0}>System</Tab>
                    <Tab value={1}>Appearance</Tab>
                    <Tab value={2}>Others</Tab>
                </Tabs>
                <TabBody style={{ height: 300 }}>
                    {activeTab === 0 && (
                    <div>
                        <Fieldset label='Order:'>
                        <div style={{ padding: '0.5em 0 0.5em 0' }}>Amount:</div>
                        <NumberField width='100%' min={0} defaultValue={0} />
                        <br/>
                        <Checkbox
                            name='shipping'
                            value='fast'
                            label='Fast shipping'
                            onChange={() => null}
                            defaultChecked
                        />
                        </Fieldset>
                    </div>
                    )}
                    {activeTab === 1 && (
                    <div>
                        <div>Appearance stuff here</div>
                    </div>
                    )}
                    {activeTab === 2 && (
                    <div>
                        <div>Others stuff here</div>
                    </div>
                    )}
                </TabBody>
            </WindowContent>
        </Window>
    </Draggable>         
    </div> 
    );
}

export default Settings