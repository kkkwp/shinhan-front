import "./styles/reset.css";
import "./styles/global.css";
import TopNav from "./components/TopNav/TopNav";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="layout">
      <TopNav />
      <Home />
    </div>
  );
}

export default App;
