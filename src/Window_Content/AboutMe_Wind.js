import React from 'react';
import {Avatar, Button, Cutout, Fieldset, Panel } from 'react95';

import './AboutMe_Wind.css'
import CV from '../Files/cv.pdf'
 
function AboutMe_Wind() {
  return (
        <div className="content">
            <div className="leftCol">
                <Avatar className="avatar" size={150} src={'./someHandsomeGuy.jpg'}/>
                
                <Button onClick={() => window.open('../Files/feo.pdf')} className="dl_resume" size="lg" >Download my resume</Button>
                
            </div>
            <div className="righCol">
                
                    <p>Paul Amblard</p>
                    
                    <p>I am currently looking for a 6 month internship somewhere in Europe!</p>
                    <p>You will learn more about me using this website</p>
                    
                <Panel className='panel' variant='outside'>
                Scolarship
                    <Fieldset label="2018-2020">
                    <p>I am currently looking for a 6 month internship somewhere in Europe!</p>
                    </Fieldset>
                    <Fieldset label="2018-2020">
                    <p>I am currently looking for a 6 month internship somewhere in Europe!</p>
                    </Fieldset>
                    <Fieldset label="2018-2020">
                    <p>I am currently looking for a 6 month internship somewhere in Europe!</p>
                    </Fieldset>
                    <p>Have a fun time exploring this website</p>
                </Panel>
                <div className="hobbies">
                    <Cutout className="hobby1" shadow = 'false'>
                        <img src="./user.ico"/>
                    </Cutout>
                    <Cutout className="hobby2" shadow = 'false'>
                        <img src="./user.ico"/>
                    </Cutout>
                    <Cutout className="hobby3" shadow = 'false'>
                        <img src="./user.ico"/>
                    </Cutout>
                </div>
               
            </div>      
        </div>
  
  );
}
 
export default AboutMe_Wind;