import { PropsWithChildren } from "react";
import { Navigate, Route, RouteProps } from "react-router-dom";
import { useSelector } from "../../Redux/hooks";


interface Props {
  loginPage?: boolean;
  children: JSX.Element;
}

export default function ProtectedRoute({ loginPage = false, children } : Props) {
  const loggedIn = useSelector(state => Boolean(state.user.user));
  return loggedIn !== loginPage ? (
    children
  ) : (
    <Navigate to={loginPage ? "/" : "/login"} replace />
  );
}