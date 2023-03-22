import React, { useState } from 'react';
import './index.css';
import MyRoutes from './routes/myroutes';
import { BrowserRouter } from 'react-router-dom';
import { ScoreContext } from './pages/component/ScoreContext';

function App() {
  const [score, setScore] = useState({
    'IE': 0,
    'NS': 0,
    'TF': 0
  });
  return (
    <div class="desktopBackground">
      <div class="innerContent">
        <BrowserRouter>
          <ScoreContext.Provider value={[score, setScore]}>
            <MyRoutes />
          </ScoreContext.Provider>
        </BrowserRouter>
      </div>
    </div >
  );
}

export default App;
