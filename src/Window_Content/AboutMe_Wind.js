import React from 'react';
import {Avatar, Button, Cutout, Fieldset, Panel, Tooltip } from 'react95';

import {RiBoxingFill, RiGlobeFill} from 'react-icons/ri'
import {MdComputer} from 'react-icons/md'
import {GiBookCover, GiPositionMarker} from 'react-icons/gi'
import './AboutMe_Wind.css'
 
function AboutMe_Wind() {
  return (
        <div className="content">
            <div className="leftCol">
                <Avatar className="avatar" size={150} src={'./someHandsomeGuy.jpg'}/>
                <div className='me_pos'><GiPositionMarker />Toulouse</div>
                <Button onClick={()=> window.open(process.env.PUBLIC_URL+'cv.pdf')} className="dl_resume" size="lg" >Download my resume</Button>
                
            </div>
            <div className="righCol">
                
                    <p id="name">Paul Amblard</p>
                    
                    <p>I am currently a student in <a href="https://miage.ut-capitole.fr/master-2is-innovative-information-systems--611942.kjsp" target="_blank">Master's degree MIAGE 2IS</a> </p>
                    <p>I am passionate about IT particulary Machine Learning, Web Development and IoT. However I am very curious to explore new technologies !</p>
                    
                <Panel className='panel' variant='outside'>
                Scolarship
                    <Fieldset className="scol1" label="2019-2021">
                    <p className="me_school">University Toulouse 1 Capitole</p>
                    <p className="me_diploma">Master Degree Miage 2IS</p>
                    <p className="me_diploma_desc">This International Degree taught me about innovative technologies and work in a multicultural environment.</p>
                    </Fieldset>
                    <Fieldset className="scol2" label="2018-2019">
                    <p className="me_school">University Toulouse 1 Capitole</p>
                    <p className="me_diploma">Bachelor MIASHS Information Technologies</p>
                    <p className="me_diploma_desc">During this bachelor I learnt a lot about the importance of IT and CS for company and more generally for the global economy.</p>
                    </Fieldset>
                    <Fieldset label="2016-2018">
                    <p className="me_school">IUT Montpellier-Sète</p>
                    <p className="me_diploma">DUT Informatique et Gestion</p>
                    <p className="me_diploma_desc">This degree taught me concrete skills about software engineering and software quality by including classes about all aspects of computer sciences.</p>
                    </Fieldset>
                </Panel>
                <Fieldset className="hobbiesFieldSet" label="Hobbies">
                    <div className="hobbies">
                        <Cutout className="hobby1" shadow = 'false'>
                            <Tooltip text='French Boxing / Savate' enterDelay={100} leaveDelay={100}>
                                <RiBoxingFill className="hobbyIco"></RiBoxingFill>
                            </Tooltip>      
                        </Cutout>
                        <Cutout className="hobby2" shadow = 'false'>
                            <Tooltip text='Reading' enterDelay={100} leaveDelay={100}>
                                <GiBookCover className="hobbyIco"></GiBookCover>
                            </Tooltip>
                        </Cutout>
                        <Cutout className="hobby3" shadow = 'false'>
                            <Tooltip text='History' enterDelay={100} leaveDelay={100}>
                                <RiGlobeFill className="hobbyIco"></RiGlobeFill>
                            </Tooltip>
                        </Cutout>
                    </div>
                </Fieldset>
            </div>      
        </div>
  
  );
}
 
export default AboutMe_Wind;