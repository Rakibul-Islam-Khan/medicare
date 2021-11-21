import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notfound from './Pages/Notfound/Notfound';
import Contact from './Pages/Contact/Contact';
import app from './Pages/Login/Firebase/firebase.init';
import Services from './Pages/Services/Services/Services';
import Login from './Pages/Login/Login/Login';
import About from './Pages/About/About';
import AuthProvider from './Context/AuthProvider';
app()
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/serviceDetail/:serviceId">
              <Services />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="*">
              <Notfound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
