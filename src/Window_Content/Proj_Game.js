import React, { useState } from 'react';
import { Fieldset, Tab, Tabs, TabBody, Anchor } from 'react95';

import './Proj_Game.css'
 
function ReadMe_Wind() {
  const [tab, setTab] = useState({
    activeTab: 0
  });

  const SRC_IMG = "/game-img/" + process.env.PUBLIC_URL;

  const handleChange = (e, value) => setTab({ activeTab: value });

  return (
        <div className="game_content">
            <Fieldset label ="An Unnamed Rogue Game">
            During the lockdown of may 2020 I decided to make my child dream come true and make a game. I started the the project and learnt skills such as UX/UI and art. <br />
            However the more features added the more I figured out that using Python may have been a bad idea. By fixing most of the optimizations the game became playable again! <br /> 
            I really want to continue and finish this game but sadly the amount of time needed to make a game alone it too high.
            </Fieldset>
            <div className="game_info">
              <div className="game_gif"><img className="concept_gif" src={SRC_IMG+'game_g1.gif'} alt="gif of the game"/></div>
              <Fieldset className="game_concept" label ="Concept">
              You wake up in an obscure dungeon, they are no way out except to continue forward. Pick up your sword and go explore the dungeon while trying to survive the enemy! Use the coins you collect on them to equip yourself better.<br />
              But take care of the shadow of the dungeon, you don’t know what hide behind the doors. <br />
              Pretty original duh? 
              </Fieldset>
            </div>
            <Fieldset className="game_features" label ="Features">
              <Tabs value={tab.activeTab} onChange={handleChange}>
                <Tab value={0}>Mobs</Tab> 
                <Tab value={1}>Light</Tab>
                <Tab value={2}>Coins and Sword</Tab>
              </Tabs>
              <TabBody style={{position:'relative'}}>
                      {tab.activeTab === 0 && (
                        <div className="game_props" style={{ height: 'auto' }}>
                          <div className="game_props_gif_cont"> <img className="game_props_gif" src={SRC_IMG+'game_mob.gif'} alt="gif of the mobs"/> </div>
                          <p className="game_props_txt">Creating mobs AI was one of the hardest parts particularly the path finding. In fact, the heuristic was uncommon, the mob can not move to win as quick as possible as it could be frustrating for the player, it should also not behave in a too bad way as it is no challenge for the player.  </p>
                        </div>
                      )}
                      {tab.activeTab === 2 && (
                        <div className="game_coins" style={{ height: 'auto' }}>
                          <div className="game_coins_gif_cont">
                            <img className="game_coins_gif" src={SRC_IMG+'game-coins.gif'} alt="gif of the coins"/>
                          </div>
                            <div className="game_coins_txt">
                            <p>Coins was also a strange point and the realization was quite mathematical, from coins dropping to coins picking I tried to make it as satisfying as possible.</p>
                            <p><br />Sword using was also a tricky part as the sword position and angle is calculated based on both the player position, mouse position and attack. Because this formula is run every frame it was needed to be optimized as much as possible.</p>
                            </div>
                        </div>
                      )}
                      {tab.activeTab === 1 && (
                          <div className="game_light" style={{ height: 'auto' }}>
                          
                            <p className="game_light_txt">Indisputably the hardest part was to create the light I inspired myself of shaders to create it. It is not perfect by any means but it us player position to calculate the area that should be lighted (no darker shade) and item of a class to be shadow creator. It was optimized to not process every pixels but work with quadrilateral.</p>

                            <div className="game_light_gif_cont">
                            <img className="game_light_gif" src={SRC_IMG+'game_light.gif'} alt="gif of the light"/>
                          </div>
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