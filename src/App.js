import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './component/MainPage';
import MainPageContainer from './container/MainPageContainer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainPageContainer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
