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
      {id: 'test', img : 'notepad_file.ico', name : 'Test'}
    ],
    windowsOpen : [],
  }

  addWindow(id){
    var elem = this.state.allIcons[id]
    this.state.windowsOpen.push(elem)
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
              <Window_comp id={item.id}></Window_comp>
            ))}
          </div>
        <div className = "task_bar">
          <AppBar fixed = {false}>
            <Toolbar style={{ justifyContent: 'space-between' }}>
              <div>
                <Button>
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
              <Button square={true}>
              <img src='gears.ico' alt='settings' style={{ height: '20px'}} />
              </Button>
            </Toolbar>
          </AppBar>
        </div>
        </ThemeProvider>
      </div>
      );
    }      
}
         

export default App;
