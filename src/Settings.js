import PropTypes from 'prop-types'
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

import { Window, WindowHeader, WindowContent,Tabs, Tab, TabBody, Fieldset, Checkbox, NumberField } from 'react95';

function Settings() {
    
    
    const [state, setState] = useState({      
        activeTab: 0
    });
      
    const handleChange = (e, value) => setState({ activeTab: value });
      
    const { activeTab } = state;

    return(
    <div className = ".setting">
    <Draggable defaultPosition={{x: 10, y: 10}} bounds = '.desktop'>
        <Window style={{ width: 350 }}>
            <WindowHeader className='.test'>
                <span role='img' aria-label='dress'>
                    👗
                </span>
                store.exe
            </WindowHeader>
            <WindowContent>
                <Tabs value={activeTab} onChange={handleChange}>
                    <Tab value={0}>Shoes</Tab>
                    <Tab value={1}>Accesories</Tab>
                    <Tab value={2}>Clothing</Tab>
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
                        <div>Accesories stuff here</div>
                    </div>
                    )}
                    {activeTab === 2 && (
                    <div>
                        <div>Clothing stuff here</div>
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