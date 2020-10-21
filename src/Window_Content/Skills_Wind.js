import React ,{useEffect, useState } from 'react';
import {ResponsiveRadar} from '@nivo/radar'
 
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
            <div style={{ height: 300 }}>
              <ResponsiveRadar
              className='sk_Graphs'
              data= {[
                {
                  "skill": "JavaScript",
                  "value": 7,
                },
                {
                  "skill": "bitter",
                  "value": 4,
                },
                {
                  "skill": "heavy",
                  "value": 5,
                },
                {
                  "skill": "strong",
                  "value": 4,
                },
                {
                  "skill": "sunny",
                  "value": 10,
                }
              ]}
              keys={[ 'value']}
              indexBy="skill"
              maxValue="auto"
              margin={{ top: 20, right: 45, bottom: 20, left: 45 }}
              curve="linearClosed"
              borderWidth={2}
              borderColor={{ from: 'color' }}
              gridLevels={10}
              gridShape="linear"
              gridLabelOffset={16}
              enableDots={true}
              dotSize={10}
              dotColor={{ theme: 'background' }}
              dotBorderWidth={2}
              dotBorderColor={{ from: 'color' }}
              enableDotLabel={true}
              dotLabel="value"
              dotLabelYOffset={-12}
              colors={{ scheme: 'nivo' }}
              fillOpacity={0.25}
              blendMode="multiply"
              animate={true}
              motionConfig="wobbly"
              isInteractive={true}
              legends={[]}
          />
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