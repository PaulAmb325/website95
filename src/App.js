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

function App() {
  const [open, setOpen] = React.useState(false);
  return (
    
      <div className="App">
        <GlobalStyles />
        <ThemeProvider theme={original}>
          <div className = "desktop">
              <Icon image='notepad_file.ico' name = "test" />
                    
          </div>
        <div className = "task_bar">
          <AppBar>
            <Toolbar style={{ justifyContent: 'space-between' }}>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <Button onClick={() => setOpen(!open)} active={open} style={{ fontWeight: 'bold' }}>
                  <img src='windows-0.png' alt='logo' style={{ height: '20px', marginRight: 4 }}/>
                    Start
                </Button>
                {open && (
                <List style={{position: 'absolute', left: '0', top: '100%'}} onClick={() => setOpen(false)}>
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
                )}
              </div>
              <TextField placeholder='Search...' width={150} />
            </Toolbar>
          </AppBar>
        </div>
        </ThemeProvider>
      </div>
  );
}

export default App;
