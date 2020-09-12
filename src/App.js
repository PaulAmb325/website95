import React from 'react';
import './App.css';
//React 95 components
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { styleReset, List, ListItem, Divider, AppBar, Toolbar, Button, TextField } from 'react95';
// pick a theme of your choice
import original from "react95/dist/themes/original";
// original Windows95 font (optionally)
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

//Les component Internes
import Icon from './Icon'
import Settings from './Settings'
import Window_comp from'./Window_comp'


 //jsp cke c'est 
//jsp cke c'est 
 //jsp cke c'est 
const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
  ${styleReset}
`;

const openStart = false;  

class App extends React.Component {
  state = {
    allIcons : [
      {idIcon: 'test', img : 'notepad_file.ico', idWindow : 'testTxt'}
    ],
    allWindows : [
      {idWindow: 'testTxt', img : 'notepad_file.ico'},
      {idWindow: 'setting', img: 'gears.ico', name:'Settings'}
    ],
    windowsOpen : [
  
    ]
  }

  openWindow(id){
    //TO DO: add check if a windows with this ID is already open
    var elem;
    for (var key in this.state.allWindows){
      if(this.state.allWindows[key].idWindow == id){
        //console.log(this.state.allWindows[key]);
        elem=this.state.allWindows[key];
      }
    }
    this.state.windowsOpen.push(elem)
    //Tres tres sale faut changer
    this.forceUpdate()
  }


  closeWindow = (id) =>{
    var pos = this.state.windowsOpen.map(function(e) { return e.idWindow; }).indexOf(id);
    if(pos != -1){
      this.state.windowsOpen.splice(pos,1)
    }
    //Que du sale sale
    this.forceUpdate()
  }




    render(){
      return(
        <div className="App">
        <GlobalStyles />
        <ThemeProvider theme={original}>
          <div className = "desktop">
            {this.state.allIcons.map(item => (
              <Icon image={item.img} name={item.name}></Icon>
            ))}
            {this.state.windowsOpen.map(item => (
              <Window_comp id={item.id} closeWindow={this.closeWindow}></Window_comp>
            ))}
          </div>
        <div className = "task_bar">
          <AppBar fixed = {false}>
            <Toolbar>
              <div>
                <Button onClick={() => this.closeWindow('setting')}>
                  <img src='windows-0.png' alt='logo' style={{ height: '20px', marginRight: 4 }}/>
                    <p >Start</p>
                </Button>
                {/* { {openStart && (
                <List style={{position: 'absolute', left: '0', bottom: '100%'}} onClick={() => setOpenStart(false)}>
                  <ListItem>
                    <span role='img' aria-label='👨‍💻'>
                      👨‍💻
                    </span>
                    Profile
                  </ListItem>
                  <ListItem>
                    <span role='img' aria-label='📁'>
                      📁
                    </span>
                    My account
                  </ListItem>
                  <Divider />
                  <ListItem disabled>
                    <span role='img' aria-label='🔙'>
                      🔙
                    </span>
                    Logout
                  </ListItem>
                </List>
                )} } */}
              </div>
              <div>
              {this.state.windowsOpen.map(item => (
              <Button>
                <img src={item.img} alt='une tache' style={{ height: '20px'}} />
                {item.name}
              </Button>
              ))}
              </div>
            <div className='menu'>
              <Button square={true} onClick={() => this.openWindow('setting')}>
                <img src='gears.ico' alt='settings' style={{ height: '20px'}} />
              </Button>
            </div>
            </Toolbar>
          </AppBar>
        </div>
        </ThemeProvider>
      </div>
      );
    }      
}
         

export default App;