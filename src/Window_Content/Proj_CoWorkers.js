import React , {useEffect, useState } from 'react';
import { Fieldset, Tab, Tabs, TabBody, Anchor, Avatar } from 'react95';

import './Proj_CoWorkers.css'
 
function ReadMe_Wind() {

  const SRC_IMG = "/cw-img/" +process.env.PUBLIC_URL;

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
                          Co-Workers is the result of two weeks of works. We was asked to improve co-working spaces and our decision was to create a social network for co-working spaces that encourage interaction. The App include an help system, events, social and the possibility to redeem point you gained by being social.
                          <br /> We also implemented an interactive map that indicate the position of the user in real time(that agree) using face-recognition. And a payment system with rfid card to redeem the points.
                          <br /> More infos :  <Anchor href='https://github.com/go-roots' target='_blank'> {' '}here</Anchor>

                          </Fieldset>
                          <Fieldset label ="Features" className="cw_Proj_features">
                          <img className="cw_image1" src={SRC_IMG+ "co-worker1.jpg"}/>
                          <img className="cw_image2" src={SRC_IMG+ "co-worker_social.png"}/>
                          </Fieldset> 
                          {/* <Fieldset className="cw_team" label ="Team" className="cw_Proj_Team">
                          <div className="cw_t1"><Avatar /><p>Ilja Stepanov - </p></div>
                          <div className="cw_t2"><Avatar /><p></p></div>
                          <div className="cw_t3"><Avatar /><p></p></div>
                          </Fieldset> */}
                        </div>
                      )}
                      {tab.activeTab === 1 && (
                        <div className="cw_web" style={{ height: 'auto' }}>
                          <Fieldset label ="Infos">
                            We started the project by creating the Website using BootStrap Studio and obtained a HTML/CSS skeleton. After that we translated it in React components and started to add the Redux Stores as the API implementation advanced. 
                          </Fieldset>
                          <div className="cw_web_desktop">
                            <img src={process.env.PUBLIC_URL+'/proj-img/co-worker_dashboard.png'} alt="Logo DCT" className="cw_web_dskt_img"/>
                            <Fieldset className="cw_web_dskt_text" label ="Features">
                            One of the main feature of the app is the interactive, real-time map to know the position of the others users. With a powerful filter system to afinate the search.<br /><br /> From this screen you can also access the help system that will send an help request on the filtered users. <br /><br />By helping others user can receive points to redeem and also have their skills recommended on LinkedIn.
                            </Fieldset>
                          </div>
                          {/* <div className="cw_web_smartphone">
                            <Fieldset className="cw_web_smrt_text" label ="Features">
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                            </Fieldset>
                            <img src={process.env.PUBLIC_URL+'logo-vinci.png'} alt="Logo Vinci Facilities" className="cw_web_smrt_img"/>
                          </div> */}

                        </div>
                      )}
                      {tab.activeTab === 2 && (
                          <div style={{ height: 'auto' }}>
                            <Fieldset className="cw_api_infos" label ="Infos">
                            We used NodeJs to create an API used by the website and the IoT devices for the RFID payment. The API is RESTful and securized using the OAuth2 protocol, we also used Mongoose ORM to handle the MongoDB Database. <br /> We overall tried to use state of the art standard as the API was the real backbode of the project.
                            </Fieldset>
                            {/* <Fieldset className="cw_api_database" label ="Database">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                            </Fieldset> */}
                            <Fieldset className="cw_api_documentation" label ="Documentation">
                            <div className="cw_doc_img"><img className="cw_doc_img" src={SRC_IMG+'cw_postman.png'}/></div>
                            <p className="cw_doc_txt">We used Postman to keep track of the queries and have example for others to use the API. It also enabled us to run test in both the dev environment and production one according to circumstances. </p>
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
                                 <img className="cw_doc_img" src={SRC_IMG+'cw-facerec.png'}/>
                                </div>
                              )}
                              {tabIoT.activeTabIoT === 1 && (
                                <div style={{ height: 'auto' }}>
                                  <img className="cw_rfid_img" src={SRC_IMG+'cw-rfid.png'}/>
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