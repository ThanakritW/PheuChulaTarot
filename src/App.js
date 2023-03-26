import React, { useState } from 'react';
import './index.css';
import MyRoutes from './routes/myroutes';
import { BrowserRouter } from 'react-router-dom';
import { ScoreContext } from './pages/component/ScoreContext';
import { PageContext } from './pages/component/PageContext';

function App() {
  const [score, setScore] = useState({
    'IE': 0,
    'NS': 0,
    'TF': 0
  });
  const [page, setPage] = useState(34);
  return (
    <div className="desktopBackground">
      <div className="innerContent">
        <BrowserRouter>
          <PageContext.Provider value={[page, setPage]}>
            <ScoreContext.Provider value={[score, setScore]}>
              <MyRoutes />
            </ScoreContext.Provider>
          </PageContext.Provider>
        </BrowserRouter>
      </div>
    </div >
  );
}

export default App;
