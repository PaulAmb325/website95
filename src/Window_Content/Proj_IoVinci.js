import React, {useEffect, useState } from 'react';
import { Fieldset, Tab, Tabs, TabBody, Cutout } from 'react95';

import './Proj_IoVinci.css' 



function Proj_IoVinci_Wind() {

  const [tab, setTab] = useState({
    activeTab: 0
  });

  const handleChange = (e, value) => setTab({ activeTab: value });

  return (
        <div className='iovinci_content'>
          <div className='iovinci_imgs'>
            <img className='iovinci_img' src={process.env.PUBLIC_URL+'logo-disrupt-campus.png'} alt="Logo DCT"/>
            <img className='iovinci_img' src={process.env.PUBLIC_URL+'logo-vinci.png'} alt="Logo Vinci Facilities"/>
          </div>
          
            <Fieldset label ="The Project" className="iovinci_project">
                
            </Fieldset>
            <Fieldset label ="Work done" className="iovinci_work">
            <Tabs value={tab.activeTab} onChange={handleChange}>
          <Tab value={0}>Overview</Tab>
          <Tab value={1}>Sensor</Tab>
          <Tab value={2}>API</Tab>
        </Tabs>
        <TabBody style={{position:'relative'}}>
                {tab.activeTab === 0 && (
                  <div style={{ height: '20vh' }}>
              
                  </div>
                )}
                {tab.activeTab === 1 && (
                   <div style={{ height: '60px' }}>
                   
                       </div>
                )}
                {tab.activeTab === 2 && (
                    <div style={{ height: '20vh' }}>
                    </div>
                )}
        </TabBody>
            </Fieldset>
            <Fieldset label ="The team" className="iovinci_team">
                
            </Fieldset>
        
        </div>
  );
}
 
export default Proj_IoVinci_Wind;