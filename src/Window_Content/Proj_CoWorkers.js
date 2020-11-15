import React , {useEffect, useState } from 'react';
import { Fieldset, Tab, Tabs, TabBody } from 'react95';

import './Proj_CoWorkers.css'
 
function ReadMe_Wind() {
  const [tab, setTab] = useState({
    activeTab: 0
  });

  const [tabIoT, setTabIoT] = useState({
    activeTabIoT: 0
  });

  const handleChange = (e, value) => setTab({ activeTab: value });

  const handleChangeIoT = (e, value) => setTabIoT({ activeTabIoT: value });
  return (
        <div>
            <Fieldset label ="Co-Workers">
            <Tabs value={tab.activeTab} onChange={handleChange}>
                <Tab value={0}>Project</Tab>
                <Tab value={1}>Web</Tab>
                <Tab value={2}>API</Tab>
                <Tab value={3}>IoT</Tab>
              </Tabs>
              <TabBody style={{position:'relative'}}>
                      {tab.activeTab === 0 && (
                        <div style={{ height: 'auto' }}>
                          <Fieldset label ="Concept" className="cw_Proj_concept">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                          </Fieldset>
                          <Fieldset label ="Features" className="cw_Proj_features">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                          </Fieldset>
                          <Fieldset label ="Team" className="cw_Proj_Team">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                          </Fieldset>
                        </div>
                      )}
                      {tab.activeTab === 1 && (
                        <div className="cw_web" style={{ height: 'auto' }}>
                          <Fieldset label ="Infos">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                          </Fieldset>
                          <div className="cw_web_desktop">
                            <img src={process.env.PUBLIC_URL+'logo-disrupt-campus.png'} alt="Logo DCT" className="cw_web_dskt_img"/>
                            <Fieldset className="cw_web_dskt_text" label ="Features">
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                            </Fieldset>
                          </div>
                          <div className="cw_web_smartphone">
                            <Fieldset className="cw_web_smrt_text" label ="Features">
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                            </Fieldset>
                            <img src={process.env.PUBLIC_URL+'logo-vinci.png'} alt="Logo Vinci Facilities" className="cw_web_smrt_img"/>
                          </div>

                        </div>
                      )}
                      {tab.activeTab === 2 && (
                          <div style={{ height: 'auto' }}>
                            <Fieldset label ="Infos">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                            </Fieldset>
                            <Fieldset label ="Database">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                            </Fieldset>
                            <Fieldset label ="Documentation">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                            </Fieldset>
                          </div>
                      )}
                      {tab.activeTab === 3 && (
                          <div style={{ height: 'auto' }}>
                              <Tabs value={tabIoT.activeTabIoT} onChange={handleChangeIoT}>
                                <Tab value={0}>Face Recognition</Tab>
                                <Tab value={1}>RFID Payment</Tab>
                              </Tabs>
                              <TabBody style={{position:'relative'}}>
                              {tabIoT.activeTabIoT === 0 && (
                                <div style={{ height: 'auto' }}>
                                  Face rec
                                </div>
                              )}
                              {tabIoT.activeTabIoT === 1 && (
                                <div style={{ height: 'auto' }}>
                                  RFID
                                </div>
                              )}
                              </TabBody>
                          </div>
                      )}
              </TabBody>
            </Fieldset>
        </div>
  
  );
}
 
export default ReadMe_Wind;