import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom'
import Profile from "../Components/Profile/Profile";
import Todo from "../Components/Todo/Todo";

const Routes = () => {
  
  return (
    <Router>
        <Route path="/profile" component={Profile} />
        <Route path="/" component={Todo} exact />
      </Router>
  );
}

export default Routes;
