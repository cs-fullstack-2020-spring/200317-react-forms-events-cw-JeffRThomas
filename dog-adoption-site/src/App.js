import React from 'react';
import './App.css';
import AppContainer from './Components/AppContainer.jsx'//Import Child Component to Main JavaScript File

function App() {
  return (
    <div className="App">
      <AppContainer/> {/*Child Component Reference*/}
    </div>
  );
}

export default App;
