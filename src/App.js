import React, { Component } from 'react';
import { Router, Route, Link } from "react-router-dom";

import history from 'browserHistory';

import { IndexPage } from 'containers';
import { ReduxTest } from 'containers';
import { RouteTest } from 'containers';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router history={history}>
                    <div>
                        <div>
                            <Link to="/">Home</Link>
                            &nbsp;&nbsp;
                            <Link to="/route">RouteTest</Link>
                            &nbsp;&nbsp;
                            <Link to="/redux">ReduxTest</Link>
                        </div>
                        {/* routes */}
                        <Route exact path="/" component={IndexPage} />
                        <Route path="/route" component={RouteTest} />
                        <Route path="/redux" component={ReduxTest} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
