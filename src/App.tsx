import React from 'react';
import './App.css';
import AppRouter from './components/Router';
import { Provider } from 'react-redux'
import { store } from './Store'

const App: React.FC = () => {
  return (
    <div id='router-container'>
      <Provider store={store} >
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
