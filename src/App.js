import React from 'react';
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import Nav from './components/Nav';
import { Route, Switch, useLocation } from 'react-router-dom';


function App() {
  const location = useLocation();
  return (
    <div className="App">
      
      <Nav />
  
        <Switch >
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
