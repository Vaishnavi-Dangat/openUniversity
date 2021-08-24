import './App.css';
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import {Route, Switch} from  "react-router-dom";
function App() {
  return (
    <div className="container mainContainer d-flex flex-column">
      <div className="row">
       <Navbar/>
      </div>
      <div className="row my-auto">
        <Switch>
          <Route exact path="/"   component={Register}></Route>
          <Route exact path="/registred-users"     component={UserList}></Route>
        </Switch>
      </div>
   </div>
  );
}

export default App;
