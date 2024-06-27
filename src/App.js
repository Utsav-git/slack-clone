import "./App.css";
import Chat from "./components/chat/Chat";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
import { Login } from "./components/login/Login";
import { useSelector } from "react-redux";

function App() {
  // const [user, setUser] = useState(null);
  const { isAuth } = useSelector((state) => state.authentication);
  localStorage.setItem("isAuthenticated", isAuth);
  console.log("APP->", isAuth);
  return (
    // BEM Naming Convention eg: className = "app"
    <div className="app">
      <BrowserRouter>
        {!isAuth ? (
          <Login />
        ) : (
          <>
            {/* Header */}
            <Header />
            <div className="app__body">
              {/* Sidebar */}
              <Sidebar />
              {/* React Router for Chat screen */}
              <Routes>
                <Route path="/room/:roomId" element={<Chat />}></Route>
                <Route path="/" element={<Welcome />}></Route>
              </Routes>
            </div>
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
