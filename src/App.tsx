import { Suspense } from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login } from "./Pages";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback="loading...">
          {/* Routes replace Switch in latest version https://reactrouter.com/docs/en/v6/upgrading/v5#upgrade-all-switch-elements-to-routes */}
          <Routes>
            <Route
              path="/login"
              element={
                <ProtectedRoute loginPage>
                  <Login />
                </ProtectedRoute>
              }
            />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
