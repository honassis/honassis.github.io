import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Projects from '././pages/Projects';
import Profile from './pages/Components/Profile';
import Menu from './pages/Components/Menu';
import About from './pages/About';
import Details from './pages/Details';


export default function Routes(){
 
    return (
      <BrowserRouter>

        <div className="global-container">
          <Menu/>
          <div className="content">
            <Profile/>
        <Switch>
        <Route path="/" exact component={Projects}/>
        <Route path="/About" component={About}/>
        <Route path="/:slug" component={Details}/>
           
        </Switch>
           
          </div>
        </div>
        </BrowserRouter>

      );
}