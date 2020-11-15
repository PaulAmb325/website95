import React, {useEffect, useState } from 'react';
import { Fieldset, Tab, Tabs, TabBody } from 'react95';

import './Proj_Game.css'
 
function ReadMe_Wind() {
  const [tab, setTab] = useState({
    activeTab: 0
  });

  const handleChange = (e, value) => setTab({ activeTab: value });

  return (
        <div className="game_content">
            <Fieldset label ="An Unnamed Rogue Game">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
            </Fieldset>
            <div className="game_info">
              <div className="game_gif"></div>
              <Fieldset className="game_concept" label ="Concept">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
              </Fieldset>
            </div>
            <Fieldset className="game_features" label ="Features">
              <Tabs value={tab.activeTab} onChange={handleChange}>
                <Tab value={0}>Props</Tab>
                <Tab value={1}>Coins</Tab>
                <Tab value={2}>Light</Tab>
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
            <Fieldset label ="Credits" className="game_credit">
                
            </Fieldset>
        </div>
  
  );
}
 
export default ReadMe_Wind;