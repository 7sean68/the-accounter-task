import LoginForm from "../../Components/LoginForm/LoginForm";
import classes from "./Login.module.scss"

export default function Login() {
  return <div className={classes.container}>
    <img src="./login-cover.png" alt="" className={classes.coverImage} />
    <LoginForm className={classes.loginForm} />
  </div>;
}