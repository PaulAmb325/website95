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
    activeWindow : "",
    allIcons : [
      {idIcon: 'test', img : 'notepad_file.ico', name : 'test', idWindow : 'testTxt'},
      {idIcon: 'testTxt', img : 'gears.ico', name:'Text' , idWindow:'TEST'}
    ],
    allWindows : [
      {idWindow: 'testTxt', img : 'notepad_file.ico', name:'Text'},
      {idWindow: 'setting', img: 'gears.ico', name:'Settings'},
      {idWindow: 'TEST', img: 'gears.ico', name:'TEST'}
    ],
    windowsOpen : [
      {idWindow: 'testTxt', img : 'notepad_file.ico', name:'Text'},
      {idWindow: 'TEST', img: 'gears.ico', name:'TEST'}
    ],
    windowsMinimized : [
      
    ]
  }
  //Trouver un moyen de ne plus afficher les windows minimized (display none maybe)
  /* minimizeWindow = (id) =>{
    var exist = false;
    var already = false;
    var elem;
    //Check if id is opened
    if(this.state.windowsOpen.length > 0){
      for (var key in this.state.windowsOpen){
        if(this.state.windowsOpen[key].idWindow == id){
          exist = true;
          elem = this.state.windowsOpen[key];
        }
      }
    }
    //Check if id is already minimized
    if(this.state.windowsMinimized.length > 0){
      for (var key in this.state.windowsMinimized){
        if(this.state.windowsMinimized[key].idWindow == id){
          already = true;
        }
      }
    }
    //Add to windowsMinimized
    if(!already && exist){
      //Correct way to update le state a remplacer le sale sale
      this.setState({windowsMinimized: [...this.state.windowsMinimized, elem]});
      console.log('jupdate le state ', this.state.windowsMinimized);
    }
    console.log('je print le state ', this.state.windowsMinimized);
  } */

/*   unminimizeWindow(id){
      var pos = this.state.windowsMinimized.map(function(e) { return e.idWindow; }).indexOf(id);
      if(pos != -1){
        console.log('a')
        this.state.windowsMinimized.splice(pos,1)
      }
    console.log('unminim',this.state);
    
  } */

  setActive = id =>{
    //change the z index of the window
    //set all the task to active
    //set the id task to active
    //(set the wind comp state to open)
  }

  openWindow = id =>{
    //TO DO: Handle the creation of z index;
    console.log('OUI  :  ', id)
    console.log(this.state)
    var exist = false;
    var elem;
    if(this.state.windowsOpen.length > 0){
      for (var key in this.state.windowsOpen){
        if(this.state.windowsOpen[key].idWindow == id){
          exist = true;
        }
      }
    }
    if(!exist){
      for (var key in this.state.allWindows){
        if(this.state.allWindows[key].idWindow == id){
          elem=this.state.allWindows[key];
          this.setState({windowsOpen: [...this.state.windowsOpen, elem]});
        }
      }
    }
  }


  closeWindow = CloseId =>{
    //TO DO correct bug windows change place after closing
    const winOp = this.state.windowsOpen.filter(item => item.idWindow !== CloseId);
    this.setState({windowsOpen: winOp});
    console.log('je print le state ', this.state);
  }

  getIconPosById(id) {
    var pos = this.state.allIcons.map(function(e) { return e.idIcon; }).indexOf(id);
    return pos;
  }

  getWindPosById(id) {
    var pos = this.state.windowsOpen.map(function(e) { return e.idWindow; }).indexOf(id);
    return pos;
  }



    render(){
      return(
        <div className="App">
        <GlobalStyles />
        <ThemeProvider theme={original}>
          <div className = "desktop">
            {this.state.allIcons.map(item => (
              <Icon openWindow={this.openWindow} idWindow={item.idWindow} image={item.img} name={item.name} x={50 * this.getIconPosById(item.idIcon)} y={0}></Icon>
            ))}
            {this.state.windowsOpen.map(item => (
              <Window_comp key={item.idWindow} id={item.idWindow} closeWindow={this.closeWindow} minimizeWindow={this.minimizeWindow} x={15 * this.getWindPosById(item.idWindow)} y={45 * this.getWindPosById(item.idWindow)}></Window_comp>
            ))}
          </div>
        <div className = "task_bar">
          <AppBar fixed = {false}>
            <Toolbar>
              <div>
                <Button className="startMenu">
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
              <Button onClick={() => this.unminimizeWindow(item.id)}>
                <img src={item.img} alt='une tache' style={{ height: '20px'}} />
                  <p>{item.name}</p>
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