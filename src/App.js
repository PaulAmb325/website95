import React from 'react';
import './App.css';

//Les component Internes
import Icon from './Icon'

function App() {
  return (
    <div className="App">
      <div className = "desktop">
          <Icon image='notepad_file.ico' name = "test" />
                
      </div>
      <div className = "task_bar">
        <div className = "start_menu">
            WINDOWS
        </div>

      
      <div className = "tasks">
        Ici va etre la barre des taches
      </div>
      <div className = "settings">
        Params
      </div>
    </div>
  </div>
  );
}

export default App;
