import classNames from "classnames";
import { Field, Form } from "react-final-form";
import { Link } from "react-router-dom";
import { useTypedDispatch } from "../../Redux/hooks";
import { login } from "../../Redux/userSlice";
import { LoginValues } from "../../Types/User";
import Checkbox from "../Checkbox/Checkbox";
import TextField from "../TextField/TextField";
import classes from "./LoginForm.module.scss";

interface Props {
  className: string;
}

const required = (value: any) => (value ? undefined : "required");

export default function LoginForm({ className }: Props) {
  // const loginError = useTypedSelector((state) => state.user.loginError);
  const dispatch = useTypedDispatch();

  const onSubmit = (values: LoginValues) => dispatch(login(values));

  return (
    <div className={classNames(className, classes.container)}>
      <div className={classes.innerContainer}>
        <p className={classes.preHeader}>Welcome back</p>
        <h2 className={classes.header}>Login to your account</h2>
        <Form onSubmit={onSubmit}>
          {(props) => (
            <form onSubmit={props.handleSubmit} className={classes.form}>
              <Field
                name="contact"
                label="Email"
                type="email"
                required
                validate={required}
                component={TextField}
                className={classes.field}
              />
              <Field
                name="password"
                label="Password"
                type="password"
                required
                validate={required}
                component={TextField}
                className={classes.field}
              />
              <div className={classes.rememberAndForgotWrapper}>
                <Field
                  name="remember"
                  label="Remember me"
                  type="checkbox"
                  component={Checkbox}
                />
                <Link to="/forgot-password" className={classes.forgot}>
                  Forgot password?
                </Link>
              </div>
              <button
                disabled={props.pristine || props.submitting}
                type="submit"
                className={classes.login}
              >
                {props.submitting ? "loading..." : "Login now"}
              </button>
            </form>
          )}
        </Form>
        <button className={classes.google}>
          <img src="/iconfinder_Google_1298745 1.svg" alt="google" />
          <span>Or sign-in with google</span>
        </button>
        <div className={classes.registerWrapper}>
          <span>Dont have an account?</span>{" "}
          <Link to="/register">Join free today</Link>
        </div>
      </div>
    </div>
  );
}
