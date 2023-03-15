import './App.css';
import React from 'react';
import './index.css';
import MyRoutes from './routes/myroutes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <React.StrictMode>
      <div class="desktopBackground">
        <div class="innerContent">
          <BrowserRouter>
            <MyRoutes />
            <footer style={{ justifyContent: "center", height: "60px" }}>
              <p>จัดทำโดยคณะผู้จัดทำพรรคเพื่อจุฬาฯ #1 | วันที่ 15 มีนาคม 2566<br />
                31 มีนาคม 2566 เลือกตั้งผ่าน CUNEX
              </p>
            </footer>
          </BrowserRouter>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default App;
