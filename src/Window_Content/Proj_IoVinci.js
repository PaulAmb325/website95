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
            <a href="https://www.disruptcampus-toulouse.fr/" target="_blank"><img className='iovinci_img' src={process.env.PUBLIC_URL+'logo-disrupt-campus.png'} alt="Logo DCT"/></a>
            <a href="https://www.vinci.com/vinci.nsf/fr/index.htm" target="_blank"><img className='iovinci_img' src={process.env.PUBLIC_URL+'logo-vinci.png'} alt="Logo Vinci Facilities"/></a>
          </div>
          
            <Fieldset label ="The Project" className="iovinci_project">
            IoVinci is the name of the project our team presented for the edition 2019-2020 of Disrupt’Campus Toulouse (click the image for more information!). For this project a team of students from Law, Sociology and Computer Sciences collaborated with Vinci Facilities to explore new possibility to reduce work accident of the technicians. <br />
            This project started in November 2019 to May 2020. During this time Disrupt’Campus Toulouse gave us formation about Project Management, Design Thinking and Pitching. 
            </Fieldset>
            <Fieldset label ="Work done" className="iovinci_work">
        <Tabs value={tab.activeTab} onChange={handleChange}>
          <Tab value={0}>Overview</Tab>
          <Tab value={1}>Sensor</Tab>
          <Tab value={2}>API</Tab>
        </Tabs>
        <TabBody style={{position:'relative'}}>
                {tab.activeTab === 0 && (
                  <div className="iovinci_overview" style={{ height: 'auto' }}>
                    <div className="iovinci_p1">
                      <div className="iovinci_imgcont"><img className="iovinci_p1_img" src={process.env.PUBLIC_URL+'grp.jpg'}/></div> 
                      <div className="iovinci_p1_txt">
                      <p>For this project Vinci Facilities wanted to explore new technologies such as IoT to reduce work incident and overall costs. Vinci Facilities is a company dedicated to maintenance of equipment in building. Some equipment are difficult to access such as ventilation and water evacuation. Maintenance for this equipment is risky and costly. <br /><br /> </p>
                      <p>We decided to provide a proof of concept for the ventilations by building a sensor to get data and try to establish a model to predict problems. This Proof of Concept also covered a law feasibility analysis and an analyzed the opinion of employees on this project.    </p>
                      </div>
                    </div>
                  </div>
                )}
                {tab.activeTab === 1 && (
                  <div style={{ height: 'auto' }}>
                    <div className="iovinci_p2">
                      <div className="iovinci_p2_txt">
                        <p>ijidjizajddddddddddddddd</p>
                      </div>
                      <div className="iovinci_imgcont2"><img className="iovinci_p2_img" src={process.env.PUBLIC_URL+'capt.jpg'}/></div>
                    </div>
                  </div>
                )}
                {tab.activeTab === 2 && (
                    <div style={{ height: 'auto' }}>
                      <div className="iovinci_p3">
                      <div className="iovinci_imgcont3"><img className="iovinci_p3_img" src={process.env.PUBLIC_URL+'spring-boot-logo.png'}/></div>
                      <div className="iovinci_p3_txt">
                        <p>ijidjizajddddddddddddddd</p>
                      </div>
                    </div>
                    </div>
                )}
        </TabBody>
            </Fieldset>
            {/* <Fieldset label ="The team" className="iovinci_team">
                <div className="iovinci_team_row1">
                  <div className="iovinci_team_member1"></div>
                  <div className="iovinci_team_member2"></div>
                </div>
                <div className="iovinci_team_row2">
                  <div className="iovinci_team_member3"></div>
                  <div className="iovinci_team_member4"></div>
                </div>
                <div className="iovinci_team_row3">
                  <div className="iovinci_team_member5"></div>
                  <div className="iovinci_team_member6"></div>
                </div>
            </Fieldset> */}
        
        </div>
  );
}
 
export default Proj_IoVinci_Wind;