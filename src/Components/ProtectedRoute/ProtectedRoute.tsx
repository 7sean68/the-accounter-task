import { Navigate } from "react-router-dom";
import { useTypedSelector } from "../../Redux/hooks";


interface Props {
  loginPage?: boolean;
  children: JSX.Element;
}

export default function ProtectedRoute({ loginPage = false, children } : Props) {
  const loggedIn = useTypedSelector(state => Boolean(state.user.user));
  return loggedIn !== loginPage ? (
    children
  ) : (
    <Navigate to={loginPage ? "/" : "/login"} replace />
  );
}