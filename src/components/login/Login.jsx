import "./Login.css";
import SlackLogo from "../../images/Slack_Logo.png";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase/Firebase";
import { useDispatch } from "react-redux";
import { login } from "../../auth/authSlice";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signIn = () => {
    console.log("Sign In....");
    auth
      .signInWithPopup(provider)
      .then((res) => {
        const data = res.user;
        dispatch(login(data));
        // localStorage.setItem("isAuthenticated", true);
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src={SlackLogo} alt="Slack Logo" />
        <h3>Sign in to Utsav's Slack</h3>
        <p>https://app.slack.com/client/T05KS1Y7N78/D05KJ5710P9</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
};
