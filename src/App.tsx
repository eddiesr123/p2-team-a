import React from 'react';
import './App.css';
import AppRouter from './components/Router';
import './include/bootstrap';

const App: React.FC = () => {
  return (
    <div id='router-container'>
        <AppRouter />
    </div>
  );
}

export default App;
