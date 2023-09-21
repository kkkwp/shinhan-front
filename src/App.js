import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/reset.css";
import "./styles/global.css";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="layout">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<div>페이지를 찾을 수 없습니다</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
