import React ,{useEffect, useState } from 'react';
 
import './Skills_Wind.css'

import {Tooltip, Button, Tab, Tabs, TabBody, Fieldset, NumberField, Checkbox} from 'react95';

function Skills_Wind() {

    const [tab, setTab] = useState({
        activeTab: 0
      });
    
    const handleChange = (e, value) => setTab({ activeTab: value });

    return (
        <div>
            <Tooltip style={{position : 'float'}} text='I see you! 🤷‍' enterDelay={100} leaveDelay={500}>
                <Button square>?</Button>
            </Tooltip>
        <Tabs value={tab.activeTab} onChange={handleChange}>
          <Tab value={0}>Web Devlopment</Tab>
          <Tab value={1}>IoT</Tab>
          <Tab value={2}>Data Science</Tab>
          <Tab value={3}>Soft Skills</Tab>
        </Tabs>
        <TabBody>
          {tab.activeTab === 0 && (
            <div>
              <div>Web Dev stuff</div>
            </div>
          )}
          {tab.activeTab === 1 && (
            <div>
              <div>IoT stuff here</div>
            </div>
          )}
          {tab.activeTab === 2 && (
            <div>
              <div>Data Science stuff here</div>
            </div>
          )}
          {tab.activeTab === 3 && (
            <div>
              <div>Soft stuff here</div>
            </div>
          )}
        </TabBody>
            
        </div>  
    );
}
 
export default Skills_Wind;