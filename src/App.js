import React , {useContext} from 'react';
// import './App.css';
import { darkModeContext } from './useContext';
import MyWebsite from './MyWebsite';

function App() {
  const theme = useContext(darkModeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`App ${darkMode ? "bg-dark" : "bg-light"}`}>
      <header className="App-header">
        <div className="redux-practice">
          <MyWebsite />
        </div>
      </header>
     </div>
  );
}

export default App;
