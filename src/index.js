import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Stopwatch from './pages/stopwatch';

const Routes = () => (
  <Router>
  	<div>
	    <Route exact path='/' component={Stopwatch}/>
    </div>
  </Router>
);

render(<Routes/>, document.getElementById('root'));