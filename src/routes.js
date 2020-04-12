import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Projects from '././pages/Projects';
import Profile from './pages/Profile';
import Details from './pages/Details';

export default function Routes(){
 
    return (
        <div className="global-container">
          <div className="content">
            <Profile/>
            <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Projects}/>
        <Route path="/Details/:slug" component={Details}/>
           
        </Switch>
        </BrowserRouter>
           
          </div>
        </div>
      );
}