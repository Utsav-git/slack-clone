import "./Login.css";
import SlackLogo from "../../images/Slack_Logo.png";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase/Firebase";
import { useDispatch } from "react-redux";
import { login } from "../../auth/authSlice";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signIn = () => {
    console.log("Sign In....");
    auth
      .signInWithPopup(provider)
      .then((res) => {
        const data = res.user;
        dispatch(login(data));
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("userDetails", JSON.stringify(data));
        navigate("/welcome");
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src={SlackLogo} alt="Slack Logo" />
        <h3>Sign in to Utsav's Slack</h3>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
};
