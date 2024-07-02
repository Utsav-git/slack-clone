import {
  Routes,
  Route,
  Redirect,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
import { Login } from "./components/login/Login";
import Chat from "./components/chat/Chat";
import { useSelector } from "react-redux";
import { NotFound } from "./components/404-not-found/NotFound";

function navigateTo(path) {
  return <Navigate to={path} />;
}

const AppRoutes = () => {
  const isLoggedIn = localStorage.getItem("isAuth");

  const authGuard = (Component, isLoggedIn) => {
    if (!isLoggedIn) {
      return navigateTo("/login");
    } else {
      return <Component />;
    }
  };

  const loginGuard = (Component, isLoggedIn) => {
    if (isLoggedIn) {
      return navigateTo("/");
    } else {
      return <Component />;
    }
  };

  const RoutePath = [
    {
      path: "/login",
      render: loginGuard(Login, isLoggedIn),
    },
    {
      path: "/",
      render: authGuard(Welcome, isLoggedIn),
    },

    {
      path: "/room/:roomId",
      render: authGuard(Chat, isLoggedIn),
    },
  ];

  return (
    <Routes>
      <>
        {RoutePath.map((routerItem, index) => (
          <Route
            key={index}
            exact
            path={routerItem.path}
            element={routerItem.render}
          />
        ))}
      </>
    </Routes>
  );
};
export default AppRoutes;
