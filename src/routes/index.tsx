import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ClassesPage from "../pages/ClassesPage";
import Login from "../pages/Login";
import PrivateRoute from "./privateRoute";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact>
          <Login />
        </Route>
        <PrivateRoute path='/' exact >
          <HomePage />
        </PrivateRoute>
        <PrivateRoute path='/classes' exact >
          <ClassesPage />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes