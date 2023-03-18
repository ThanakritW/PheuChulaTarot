import React from 'react';
import './index.css';
import MyRoutes from './routes/myroutes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div class="desktopBackground">
      <div class="innerContent">
        <BrowserRouter>
          <MyRoutes />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
