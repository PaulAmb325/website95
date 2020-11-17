import React, {useEffect, useState } from 'react';
import { Fieldset, Tab, Tabs, TabBody, Anchor } from 'react95';

import './Proj_Game.css'
 
function ReadMe_Wind() {
  const [tab, setTab] = useState({
    activeTab: 0
  });

  const handleChange = (e, value) => setTab({ activeTab: value });

  return (
        <div className="game_content">
            <Fieldset label ="An Unnamed Rogue Game">
            During the lockdown of may 2020 I decided to make my child dream come true and make a game. I started the the project and learnt skills such as UX/UI and art. <br />
            However the more features added the more I figured out that using Python may have been a bad idea. By fixing most of the optimizations the game became playable again! <br /> 
            I really want to continue and finish this game but sadly the amount of time needed to make a game alone it too high.
            </Fieldset>
            <div className="game_info">
              <div className="game_gif"></div>
              <Fieldset className="game_concept" label ="Concept">
              You wake up in an obscure dungeon, they are no way out except to continue forward. Pick up your sword and go explore the dungeon while trying to survive the enemy! Use the coins you collect on them to equip yourself better.<br />
              But take care of the shadow of the dungeon, you don’t know what hide behind the doors. <br />
              Pretty original duh? 
              </Fieldset>
            </div>
            <Fieldset className="game_features" label ="Features">
              <Tabs value={tab.activeTab} onChange={handleChange}>
                <Tab value={0}>Mobs</Tab>
                <Tab value={1}>Coins</Tab>
                <Tab value={2}>Light</Tab>
              </Tabs>
              <TabBody style={{position:'relative'}}>
                      {tab.activeTab === 0 && (
                        <div className="game_props" style={{ height: 'auto' }}>
                          <img className="game_props_gif" src={process.env.PUBLIC_URL+'cw_postman.png'}/>
                          <p className="game_props_txt">We used Postman to keep track of the queries and have example for others to use the API. It also enabled us to run test in both the dev environment and production one according to circumstances. </p>
                        </div>
                      )}
                      {tab.activeTab === 1 && (
                        <div className="game_coins" style={{ height: 'auto' }}>
                            <img className="game_coins_gif" src={process.env.PUBLIC_URL+'cw_postman.png'}/>
                            <p className="game_coins_txt">We used Postman to keep track of the queries and have example for others to use the API. It also enabled us to run test in both the dev environment and production one according to circumstances. </p>
                        </div>
                      )}
                      {tab.activeTab === 2 && (
                          <div className="game_light" style={{ height: 'auto' }}>
                            <img className="game_light_gif" src={process.env.PUBLIC_URL+'cw_postman.png'}/>
                            <p className="game_light_txt">We used Postman to keep track of the queries and have example for others to use the API. It also enabled us to run test in both the dev environment and production one according to circumstances. </p>
                          </div>
                      )}
              </TabBody>
            </Fieldset>
            <Fieldset label ="Credits" className="game_credit">
                Most of the arts are from : <Anchor href="https://0x72.itch.io/dungeontileset-ii" target="_blank">0x72</Anchor>
            </Fieldset>
        </div>
  
  );
}
 
export default ReadMe_Wind;