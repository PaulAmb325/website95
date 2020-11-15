import React ,{useEffect, useState } from 'react';
import {ResponsiveRadar, Radar} from '@nivo/radar'
 
import './Skills_Wind.css'


import {Tooltip, Button, Tab, Tabs, TabBody, Fieldset, NumberField, Checkbox} from 'react95';

function Skills_Wind(props) {

   

    function test(id){
      console.log(props)
      console.log("clicked")
      console.log(id)
    }

    const [tab, setTab] = useState({
        activeTab: 0
      });
    
    const handleChange = (e, value) => setTab({ activeTab: value });

    const LabelComponent = ({ id, anchor }) => (
      <g className="sk_skill" onClick={() => props.startProjSearch(id)} transform={`translate(${anchor === 'end' ? -30 : anchor === 'middle' ? -30 : 0}, 0)`}>
          <text>{id}</text>
      </g>
  )
    
    return (
        <div>
        <Tabs value={tab.activeTab} onChange={handleChange}>
          <Tab value={0}>Web Devlopment</Tab>
          <Tab value={1}>IoT</Tab>
          <Tab value={2}>Data Science</Tab>
          <Tab value={3}>Soft Skills</Tab>
        </Tabs>
        <TabBody>
          {tab.activeTab === 0 && (
            <div style={{ height: '60vh' }}>
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
              margin={{ top: 25, right: 45, bottom: 20, left: 45 }}
              curve="linearClosed"
              borderWidth={2}
              borderColor={{ from: 'color' }}
              gridLevels={10}
              gridShape="linear"
              gridLabelOffset={10}
              enableDots={true}
              dotSize={10}
              dotColor={{ theme: 'background' }}
              dotBorderWidth={2}
              dotBorderColor={{ from: 'color' }}
              enableDotLabel={true}
              dotLabel="value"
              dotLabelYOffset={-12}
              colors={{ scheme: 'set2' }}
              fillOpacity={0.75}
              blendMode="multiply"
              animate={true}
              motionConfig="wobbly"
              isInteractive={false}
              gridLabel={LabelComponent}
              /* legends={[]} */
          />
                  </div>
                )}
                {tab.activeTab === 1 && (
                   <div style={{ height: '60vh' }}>
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
                   gridLabelOffset={10}
                   enableDots={true}
                   dotSize={10}
                   dotColor={{ theme: 'background' }}
                   dotBorderWidth={2}
                   dotBorderColor={{ from: 'color' }}
                   enableDotLabel={true}
                   dotLabel="value"
                   dotLabelYOffset={-12}
                   colors={{ scheme: 'set2' }}
                   fillOpacity={0.75}
                   blendMode="multiply"
                   animate={true}
                   motionConfig="wobbly"
                   isInteractive={false}
                   /* legends={[]} */
               />
                       </div>
                )}
                {tab.activeTab === 2 && (
                   <div style={{ height: '60vh' }}>
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
                   gridLabelOffset={10}
                   enableDots={true}
                   dotSize={10}
                   dotColor={{ theme: 'background' }}
                   dotBorderWidth={2}
                   dotBorderColor={{ from: 'color' }}
                   enableDotLabel={true}
                   dotLabel="value"
                   dotLabelYOffset={-12}
                   colors={{ scheme: 'set2' }}
                   fillOpacity={0.75}
                   blendMode="multiply"
                   animate={true}
                   motionConfig="wobbly"
                   isInteractive={false}
                   /* legends={[]} */
               />
                       </div>
                )}
                {tab.activeTab === 3 && (
                   <div style={{ height: '60vh' }}>
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
                   gridLabelOffset={10}
                   enableDots={true}
                   dotSize={10}
                   dotColor={{ theme: 'background' }}
                   dotBorderWidth={2}
                   dotBorderColor={{ from: 'color' }}
                   enableDotLabel={true}
                   dotLabel="value"
                   dotLabelYOffset={-12}
                   colors={{ scheme: 'set2' }}
                   fillOpacity={0.75}
                   blendMode="multiply"
                   animate={true}
                   motionConfig="wobbly"
                   isInteractive={false}
                   /* legends={[]} */
               />
                       </div>
                )}
        </TabBody>
            
        </div>  
    );
}
 
export default Skills_Wind;