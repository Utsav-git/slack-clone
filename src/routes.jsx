// import { Switch, Route, Redirect, useLocation } from "react-router-dom";
// import Login from "./pages/authentication/Login";
// import { useAppSelector } from "./redux/ReduxHooks/hooks";
// import { TeamFeedback } from "./pages/teamfeedback/TeamFeedback";
// import { ChangeRole } from "./pages/mentor-mentee/change-role/ChangeRole";
// import Profile from "./pages/user/Profile";
// import MentorMentee from "./pages/mentor-mentee";
// import { MyFeedback } from "./pages/my-feedback/MyFeedback";
// import MyFeedbackDetails from "./pages/my-feedback/my-feedback-details/MyFeedbackDetails";
// import TeamFeedbackDetails from "./pages/teamfeedback/feedback-details/FeedbackDetails";
// import { DashBoard } from "./pages/dashboard/Dashboard";
// import { EmployeeList } from "./pages/employee-list/employee-list";
// import { EmployeeSummary } from "./pages/employee-list/employee-summary/employee-summary";
// import { GoalList } from "./pages/goals/goal-list";
// import { useMemo } from "react";
// import { AssignmentList } from "./pages/assignments/assignments";
// import NotFound from "./pages/404Page/NotFound";
// import { Reports } from "./pages/reports/reports";
// import { Forms } from "./pages/forms/forms";
// import { CreateForm } from "./pages/forms/create-form";
// import { EditForm } from "./pages/forms/edit-form";
// import { Team } from "./pages/team/team";
// import { FeedbackHistory } from "./pages/team/feedback-history/feedback-history";
// import { FormAction } from "./pages/forms/form-action";

// function navigateTo(path: any) {
//   return <Redirect to={path} />;
// }

// const Routes = () => {
//   const { isLoggedIn } = useAppSelector((state) => state.loginSlice);
//   const currentPage = `${useLocation().pathname.split("/")?.[1]}/${
//     useLocation().pathname.split("/")?.[2]
//   }`;
//   const authGuard = (Component: any, isLoggedIn: any) => {
//     if (!isLoggedIn) {
//       return navigateTo("/");
//     } else {
//       return <Component />;
//     }
//   };

//   const roleGuard = (Comment: any, isLoggedIn: any) => {
//     if (!isLoggedIn) {
//       return navigateTo("/");
//     } else {
//       return navigateTo("/myfeedback");
//     }
//   };

//   const roleId = useMemo(() => {
//     const empDetails = localStorage.getItem("details")
//       ? (JSON.parse(localStorage.getItem("details") || "") as Record<
//           string,
//           any
//         >)
//       : null;
//     return empDetails ? empDetails.role_id : 0;
//   }, [isLoggedIn]);

//   const loginGuard = (isLoggedIn: boolean, Component: any) => {
//     if (isLoggedIn) {
//       if (roleId > 0) return navigateTo("/dashboard");
//       else return navigateTo("/myfeedback");
//     } else {
//       return <Component />;
//     }
//   };

//   const RoutePath = [
//     {
//       path: "/",
//       render: loginGuard(isLoggedIn, Login),
//     },
//     {
//       path: "/dashboard",
//       render:
//         roleId > 0
//           ? authGuard(DashBoard, isLoggedIn)
//           : roleGuard(DashBoard, isLoggedIn),
//     },
//     {
//       path: "/employee-list",
//       render:
//         roleId > 0
//           ? authGuard(EmployeeList, isLoggedIn)
//           : roleGuard(EmployeeList, isLoggedIn),
//     },
//     {
//       path: "/employee-list/employee-summary/:emp_id",
//       render:
//         roleId > 0
//           ? authGuard(EmployeeSummary, isLoggedIn)
//           : roleGuard(EmployeeSummary, isLoggedIn),
//     },
//     {
//       path: "/mentor-mentee",
//       render: authGuard(MentorMentee, isLoggedIn),
//     },
//     {
//       path: "/profile",
//       render: authGuard(Profile, isLoggedIn),
//     },
//     {
//       path: "/myfeedback",
//       render: authGuard(MyFeedback, isLoggedIn),
//     },
//     {
//       path: "/myfeedback/details/:assigned_feedback_id",
//       render: authGuard(MyFeedbackDetails, isLoggedIn),
//     },
//     {
//       path: "/change-role",
//       render: ChangeRole,
//     },
//     {
//       path: "/teamfeedback",
//       render: authGuard(TeamFeedback, isLoggedIn),
//     },
//     {
//       path: "/teamfeedback/feedbackdetails/:id",
//       render: authGuard(TeamFeedbackDetails, isLoggedIn),
//     },
//     {
//       path: "/goals",
//       render: authGuard(GoalList, isLoggedIn),
//     },
//     {
//       path: "/assignments",
//       render: authGuard(AssignmentList, isLoggedIn),
//     },
//     {
//       path: "/reports",
//       render: authGuard(Reports, isLoggedIn),
//     },
//     {
//       path: "/forms",
//       render: authGuard(Forms, isLoggedIn),
//     },
//     {
//       path: "/forms/create-forms",
//       render: authGuard(FormAction, isLoggedIn),
//     },
//     {
//       path: "/forms/edit-forms",
//       render: authGuard(FormAction, isLoggedIn),
//     },
//     {
//       path: "/team",
//       render: authGuard(Team, isLoggedIn),
//     },
//     {
//       path: "/team/feedback-history/:emp_id",
//       render: authGuard(FeedbackHistory, isLoggedIn),
//     },
//   ];

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
// };
// export default Routes;
