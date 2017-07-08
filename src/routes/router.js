import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import App from '../app.js';


const Router = () =>
    <BrowserRouter>
       <div>
           <Route exact path="/" component={ () => <App/> }/>
           <Route path="/page2" component={() => <div>hello3</div> } />
           <Route path="/page3" component={() => <div>hello3</div> }/>
       </div>
    </BrowserRouter>;

export default Router;
