import React ,{ useState } from 'react';
import {ResponsiveRadar} from '@nivo/radar'
 
import './Skills_Wind.css'


import { Tab, Tabs, TabBody} from 'react95';

function Skills_Wind(props) {


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
          <Tab value={3}>Others - Soft Skills</Tab>
        </Tabs>
        <TabBody>
          {tab.activeTab === 0 && (
            <div style={{ height: '60vh' }}>
              <ResponsiveRadar
              className='sk_Graphs'
              data= {[
                {
                  "skill": "HTML/CSS",
                  "value": 7,
                },
                {
                  "skill": "JavaScript",
                  "value": 8,
                },
                {
                  "skill": "ReactJs",
                  "value": 7,
                },
                {
                  "skill": "AngularJs",
                  "value": 6,
                },
                {
                  "skill": "NodeJs",
                  "value": 8,
                },
                {
                  "skill": "Database SQL - NO/SQL",
                  "value": 9,
                },
                {
                  "skill": "Java (Spring)",
                  "value": 5,
                },
                {
                  "skill": "Hosting",
                  "value": 7,
                },
                {
                  "skill": "Python (Flask)",
                  "value": 6,
                }
              ]}
              keys={[ 'value']}
              indexBy="skill"
              maxValue="10"
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
                       "skill": "C",
                       "value": 7,
                     },
                     {
                       "skill": "Cloud Service",
                       "value": 6,
                     },
                     {
                       "skill": "Communication Protocol",
                       "value": 5,
                     },
                     {
                       "skill": "Electronics",
                       "value": 7,
                     },
                     {
                       "skill": "Networking",
                       "value": 7,
                     }
                   ]}
                   keys={[ 'value']}
                   indexBy="skill"
                   maxValue="10"
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
                       "skill": "Python",
                       "value": 9,
                     },
                     {
                       "skill": "Scikit Learn",
                       "value": 7,
                     },
                     {
                       "skill": "R",
                       "value": 6,
                     },
                     {
                       "skill": "Database SQL - NO/SQL",
                       "value": 9,
                     },
                     {
                       "skill": "Machine Learning",
                       "value": 7,
                     },
                     {
                       "skill": "Data Visualization",
                       "value": 8,
                     }
                   ]}
                   keys={[ 'value']}
                   indexBy="skill"
                   maxValue="10"
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
                       "skill": "Agile Project Management",
                       "value": 7,
                     },
                     {
                       "skill": "Git",
                       "value": 8,
                     },
                     {
                       "skill": "Dockers",
                       "value": 7,
                     },
                     {
                       "skill": "UI/UX",
                       "value": 7,
                     },
                     {
                       "skill": "Capacity to learn",
                       "value": 8,
                     },
                     {
                       "skill": "Creativity",
                       "value": 9,
                     },
                     {
                       "skill": "Design thinking",
                       "value": 7,
                     }
                   ]}
                   keys={[ 'value']}
                   indexBy="skill"
                   maxValue="10"
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