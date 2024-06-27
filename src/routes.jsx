import {
  Switch,
  Route,
  Redirect,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
import { Login } from "./components/login/Login";
import Chat from "./components/chat/Chat";
import { useSelector } from "react-redux";

function navigateTo(path) {
  return <Redirect to={path} />;
}

const Routes = () => {
  //   const { isAuth } = useSelector((state) => state.authentication);
  const isLoggedIn = localStorage.getItem("isAuth");
  //   const currentPage = `${useLocation().pathname.split("/")?.[1]}/${
  //     useLocation().pathname.split("/")?.[2]
  //   }`;
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

  //   const isAvailable = RoutePath.find(
  //     (routerItem: any) =>
  //       `${routerItem.path.split("/")?.[1]}/${
  //         routerItem.path.split("/")?.[2]
  //       }` === currentPage
  //   );
  //   return (
  //     <Switch>
  //       <>
  //         {RoutePath.map((routerItem) => {
  //           const mainMenu = `${routerItem.path.split("/")?.[1]}/${
  //             routerItem.path.split("/")?.[2]
  //           }`;

  //           if (mainMenu === currentPage) {
  //             return (
  //               <Route
  //                 exact
  //                 path={routerItem.path}
  //                 render={(props): any => {
  //                   return routerItem.render;
  //                 }}
  //               />
  //             );
  //           }
  //           if (!isAvailable) {
  //             return navigateTo("not-found");
  //           }
  //         })}
  //         {!isAvailable && (
  //           <Route
  //             path="/*"
  //             exact
  //             render={(props) => authGuard(NotFound, isLoggedIn)}
  //           />
  //         )}
  //       </>
  //     </Switch>
  //   );
};
export default Routes;
