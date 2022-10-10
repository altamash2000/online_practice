import { Route, BrowserRouter, Routes } from "react-router-dom";

import LoginPage from './auth/login'
import './App.css';

function App() {
  const isLogin = true;
  if (isLogin) {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<LoginPage />} />
              {/* <Route path="tableData" element={<TableData  />} /> */}
              {/* <Route path="*" element={<NoPage />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    )

  }
}

export default App;
