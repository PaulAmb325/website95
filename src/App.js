import React, { useRef } from 'react';
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

//const ref = useRef(null);

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    activeWindow : "TEST",

    allIcons : [
      {idIcon: 'rm', img : 'notepad_file.ico', name : 'ReadMe', idWindow : 'ReadMe'},
      {idIcon: 'me', img : 'user.ico', name:'About Me' , idWindow:'Me'}
    ],
    allWindows : [
      {idWindow: 'ReadMe', img : 'notepad_file.ico', name:'ReadMe'},
      {idWindow: 'setting', img: 'gears.ico', name:'Settings'},
      {idWindow: 'Me', img: 'user.ico', name:'About Me'}
    ],
    windowsOpen : [
      {idWindow: 'ReadMe', img : 'notepad_file.ico', name:'ReadMe', changeIndex: 0},
      {idWindow: 'Me', img: 'user.ico', name:'About Me', changeIndex: 0}
    ],
    windowsOpenRender : [
      {idWindow: 'ReadMe', img : 'notepad_file.ico', name:'ReadMe', changeIndex: 0},
      {idWindow: 'Me', img: 'user.ico', name:'About Me', changeIndex: 0}
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

  
    
/*   //Change state of the window
  changeOpen = id =>{
    console.log(this.state)
    var win = this.state.windowsOpen;
    var pos = this.state.windowsOpen.map(function(e) { return e.idWindow; }).indexOf(id);
    win[pos].open = !win[pos].open;
    this.setState({windowsOpen:win})
  } */



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
    return arr; // for testing purposes
  };

  reordonateOrder = id => {
    //console.log(this.state.activeWindow);
    var pos = this.getWindRendPosByID(id);
    var winds = this.state.windowsOpenRender;
    this.array_move(winds,pos,this.state.windowsOpenRender.length-1);
    this.setState({windowsOpenRender:winds});
  }

  setActive = id =>{
    this.reordonateOrder(id);
    this.setState({activeWindow: id});
  }


  /* getMaxZ(){
    //Return the higest Z of all windows
    var maxZ = 0;
    if(this.state.windowsOpen.length > 0){
      for (var key in this.state.windowsOpen){
        if(this.state.windowsOpen[key].z > maxZ){
          maxZ = this.state.windowsOpen[key].z;
        }
      }
    }
    return maxZ
  } */
  unminimizeWindow(id){
    this.setState({activeWindow:id})
    var wRen = this.state.windowsOpenRender;
    var wOpe = this.state.windowsOpen;
    var wPos = this.getWindPosById(id);
    var wRPos = this.getWindRendPosByID(id);
    console.log(wRen[wRPos]);
    wRen[wRPos].changeIndex = wRen[wRPos].changeIndex + 1;
    wOpe[wPos].changeIndex = wOpe[wPos].changeIndex + 1;
    this.setState({windowsOpen: wOpe});
    this.setState({windowsOpenRender: wRen});
  }

  openWindow = id =>{
    //TO DO: Handle the creation of z index;
    console.log('OUI  :  ', id)
    //console.log(this.state)
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
          //elem.z = this.getMaxZ() + 1;
          this.setState({windowsOpen: [...this.state.windowsOpen, elem]});
          this.setState({windowsOpenRender: [...this.state.windowsOpenRender, elem]});
          this.setState({activeWindow: elem.idWindow})
        }
      }
    }
  }


  closeWindow = CloseId =>{
    const winOpRen = this.state.windowsOpenRender.filter(item => item.idWindow !== CloseId); 
    const winOp = this.state.windowsOpen.filter(item => item.idWindow !== CloseId);

    this.setState({windowsOpenRender: winOpRen}, function (){
      console.log(winOpRen)
      console.log(this.state.windowsOpenRender)
    });
    this.setState({windowsOpen: winOp}, function(){
      console.log(this.state.windowsOpen)
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



    render(){
      return(
        <div className="App">
        <GlobalStyles />
        <ThemeProvider theme={original}>
          <div className = "desktop">
            {this.state.allIcons.map(item => (
              <Icon openWindow={this.openWindow} idWindow={item.idWindow} image={item.img} name={item.name} x={50 * this.getIconPosById(item.idIcon)} y={0}></Icon>
            ))}
            {this.state.windowsOpenRender.map(item => (
              <Window_comp key={item.idWindow} id={item.idWindow} closeWindow={this.closeWindow} setActive={this.setActive} x={15 * this.getWindPosById(item.idWindow)} y={45 * this.getWindPosById(item.idWindow)} changeIndex={item.changeIndex} name={item.name}></Window_comp>
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
              <Divider orientation="vertical" size="35px" className='divider'/>
              <div>
              {this.state.windowsOpen.map(item => (
              <Button onClick={() => this.unminimizeWindow(item.idWindow)}  active={item.idWindow == this.state.activeWindow ? true : false}>
                <img src={item.img} alt='une tache' style={{ height: '20px'}} />
                  <p>{item.name}</p>
              </Button>
              ))}
              </div>
              <Divider orientation="vertical" size="35px" className='divider menudivider'/>
            <div className='menu'>
            <Button square={true} onClick={() => window.open("https://www.linkedin.com/in/paul-amblard-059a0915a/", "_blank")}>
                <img src='LinkedIn-Logo.png' alt='settings' style={{ height: '20px'}} />
              </Button>
              <Button square={true} onClick={() => window.open("https://github.com/PaulAmb325", "_blank")}>
                <img src='github-Logo.png' alt='settings' style={{ height: '20px'}} />
              </Button>
              <Button square={true} onClick={() => window.open("https://github.com/PaulAmb325", "_blank")}>
                <img src='Twitter-Logo.png' alt='settings' style={{ height: '20px'}} />
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