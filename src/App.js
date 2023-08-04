import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    // BEM Naming Convention eg: className = "app"
    <div className="app">
      {/* Header */}
      <Header />
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />
        {/* React Router for Chat screen */}
      </div>
    </div>
  );
}

export default App;
