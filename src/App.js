import React from 'react';
import './App.css';
//React 95 components
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { styleReset, List, ListItem, Divider, AppBar, Toolbar, Button } from 'react95';
// pick a theme of your choice
import original from "react95/dist/themes/original";
// original Windows95 font (optionally)
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

//Les component Internes
import Icon from './Icon'
import Window_comp from'./Window_comp'


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


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    startMenu : false,

    activeWindow : "ReadMe",

    allIcons : [
      {idIcon: 'rm', img : 'notepad_file.ico', name : 'ReadMe', idWindow : 'ReadMe'},
      {idIcon: 'me', img : 'user.ico', name:'About Me' , idWindow:'Me'},
      {idIcon: 'projs', img : 'projects.ico', name:'Projects' , idWindow:'projs'},
      {idIcon: 'skills', img : 'skills.ico', name:'Skills' , idWindow:'skills'},
      {idIcon: 'iovinci', img : 'processor.ico', name: 'IoVinci', idWindow:'proj_iovinci'},
      {idIcon: 'unnamedGame', img : 'game.ico', name: 'Unnamed Game', idWindow:'proj_game'},
      /* {idIcon: 'website', img : 'projects.ico', name: 'WebSite 95', idWindow:'proj_95'}, */
      {idIcon: 'coworkers', img : 'co-workers.svg', name: 'Co-Workers', idWindow:'proj_coworkers'},
    ],
    allWindows : [
      {idWindow: 'ReadMe', img : 'notepad_file.ico', name:'ReadMe'},
      {idWindow: 'setting', img: 'gears.ico', name:'Settings'},
      {idWindow: 'Me', img: 'user.ico', name:'About Me'},
      {idWindow: 'projs', img: 'projects.ico', name:'Projects'},
      {idWindow: 'skills', img: 'skills.ico', name:'Skills'},
      {idWindow: 'proj_iovinci', img: 'processor.ico', name:'IoVinci'},
      {idWindow: 'proj_game', img: 'game.ico', name:'Unnamed Game'},
      {idWindow: 'proj_95', img: 'projects.ico', name:'WebSite 95'},
      {idWindow: 'proj_coworkers', img: 'co-workers.svg', name:'Co-Workers'},
    ],
    windowsOpen : [
      {idWindow: 'ReadMe', img : 'notepad_file.ico', name:'ReadMe', changeIndex: 0},  
    ],
    windowsOpenRender : [
      {idWindow: 'ReadMe', img : 'notepad_file.ico', name:'ReadMe', changeIndex: 0},
    ]

  }

  array_move(arr, old_index, new_index) {
    while (old_index < 0) {
        old_index += arr.length;
    }
    while (new_index < 0) {
        new_index += arr.length;
    }
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; 
  };

  reordonateOrder = id => {
    var pos = this.getWindRendPosByID(id);
    var winds = this.state.windowsOpenRender;
    this.array_move(winds,pos,this.state.windowsOpenRender.length-1);
    this.setState({windowsOpenRender:winds});
  }

  setActive = id =>{
    this.reordonateOrder(id);
    this.setState({activeWindow: id});
  }

  unminimizeWindow(id){
    this.setState({activeWindow:id})
    var wRen = this.state.windowsOpenRender;
    var wOpe = this.state.windowsOpen;
    var wPos = this.getWindPosById(id);
    var wRPos = this.getWindRendPosByID(id);
    
    wRen[wRPos].changeIndex = wRen[wRPos].changeIndex + 1;
    wOpe[wPos].changeIndex = wOpe[wPos].changeIndex + 1;
    this.setState({windowsOpen: wOpe});
    this.setState({windowsOpenRender: wRen});
    this.setActive(id);
  }

  openWindow = id =>{
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
          elem.changeIndex = 0;
          
          this.setState({windowsOpen: [...this.state.windowsOpen, elem]},  function(){
            this.setState({windowsOpenRender: [...this.state.windowsOpenRender, elem]},  function(){
            });
            this.setState({activeWindow: elem.idWindow},  function(){
            });
          });  
        }
      }
    }
  }

  closeWindow = CloseId =>{
    const winOpRen = this.state.windowsOpenRender.filter(item => item.idWindow !== CloseId); 
    const winOp = this.state.windowsOpen.filter(item => item.idWindow !== CloseId);

    this.setState({windowsOpenRender: winOpRen}, function (){
    });
    this.setState({windowsOpen: winOp}, function(){
    });
  }

  getIconPosById(id) {
    var pos = this.state.allIcons.map(function(e) { return e.idIcon; }).indexOf(id);
    return pos;
  }

  getWindPosById(id) {
    var pos = this.state.windowsOpen.map(function(e) { return e.idWindow; }).indexOf(id);
    return pos;
  }

  getWindRendPosByID(id) {
    var pos = this.state.windowsOpenRender.map(function(e) { return e.idWindow; }).indexOf(id);
    return pos;
  }

  setStartMenu(){
    var strtMenu = this.state.startMenu;
    this.setState({startMenu: !strtMenu})
  }

  getRandomIconX(){
    return Math.random() * (window.innerWidth * 0.90);
  }

  getRandomIconY(){
    return Math.random() * (window.innerHeight * 0.82);
  }

  getIconX(idIcon){
    switch(idIcon) {
      case 'rm':
          return 0;
      case 'me':
          return 80;
      case 'projs':
          return 0;
      case 'skills':
          return 80;
      case 'iovinci':
          return 0;
      case 'unnamedGame':
          return 80;
      case 'coworkers':
          return 200;
      default:
          return 0;
    } 
  }

  getIconY(idIcon){
    switch(idIcon) {
      case 'rm':
          return 0;
      case 'me':
          return 0;
      case 'projs':
          return 80;
      case 'skills':
          return 80;
      case 'iovinci':
          return 160;
      case 'unnamedGame':
          return 160;
      case 'coworkers':
          return 160;
      default:
          return 0;
    }
  }

  getWindX(idWind){
    //Verify the wind will not pop outside the screen
    var x = 15 * this.getWindPosById(idWind);
    if(window.innerWidth < (450 + x)){
      x = 0;
    }
    return x
  }



    render(){
      return(
        <div className="App">
        <GlobalStyles />
        <ThemeProvider theme={original}>
          <div className = "desktop">
            {this.state.allIcons.map(item => (
              <Icon openWindow={this.openWindow} idWindow={item.idWindow} image={item.img} name={item.name} x={this.getIconX(item.idIcon)} y={this.getIconY(item.idIcon)}></Icon>
            ))}
            {this.state.windowsOpenRender.map(item => (
              <Window_comp key={item.idWindow} id={item.idWindow} closeWindow={this.closeWindow} openWindow={this.openWindow} setActive={this.setActive} x={this.getWindX(item.idWindow)} y={45 * this.getWindPosById(item.idWindow)} changeIndex={item.changeIndex} name={item.name}></Window_comp>
            ))}
          </div>
        {/* <div className = "task_bar"> */}
          <AppBar className="task_bar" fixed = {false}>
            <Toolbar className="tool_bar">
              <div>
                <Button className="startMenu" onClick={() => this.setStartMenu()}>
                  <img src='windows-0.png' alt='logo' style={{ height: '20px', marginRight: 4 }}/>
                    <p >Start</p>
                </Button>
                
                {this.state.startMenu && (
                <List style={{position: 'absolute', left: '0', bottom: '100%', fontFamily: 'ms_sans_serif'}} >
                  <ListItem onClick={() => this.openWindow("projs")}>
                <span role='img' aria-label='📁'>
                  📁
                </span>
                Projects
                </ListItem>
                </List>
                )} 
              </div>
              <Divider orientation="vertical" size="35px" className='divider'/>
              <div>
              {this.state.windowsOpen.map(item => (
              <Button onClick={() => this.unminimizeWindow(item.idWindow)}  active={item.idWindow == this.state.activeWindow ? true : false}>
                <img src={"/icons/" +item.img} alt='une tache' style={{ height: '20px'}} />
                  <p>{item.name}</p>
              </Button>
              ))}
              </div>
              <Divider orientation="vertical" size="35px" className='divider menudivider'/>
            <div className='menu'>
            <Button square={true} onClick={() => window.open("https://www.linkedin.com/in/paul-amblard-059a0915a/", "_blank")}>
                <img src='social/LinkedIn-Logo.png' alt='settings' style={{ height: '20px'}} />
              </Button>
              <Button square={true} onClick={() => window.open("https://github.com/PaulAmb325", "_blank")}>
                <img src='social/github-Logo.png' alt='settings' style={{ height: '20px'}} />
              </Button>
              <Button square={true} onClick={() => window.open("https://twitter.com/paul_amblard", "_blank")}>
                <img src='social/Twitter-Logo.png' alt='settings' style={{ height: '20px'}} />
              </Button>
            </div>
            </Toolbar>
          </AppBar>
        {/* </div> */}
        </ThemeProvider>
      </div>
      );
    }      
}
         

export default App;