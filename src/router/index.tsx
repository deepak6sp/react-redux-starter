import * as React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import App from '../app';

import Test from '../../src/components/bgVideo';


const Router = () =>
    <BrowserRouter>
       <div>
           <Route exact path="/" component={ () => <App /> }/>
       </div>
    </BrowserRouter>;

export default Router;
