import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import { IndexPage } from './containers';
import { Page1 } from './containers';
import { RouteTest } from './containers';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <div>
                            <Link to="/">Home</Link>
                            &nbsp;&nbsp;
                            <Link to="/route">RouteTest</Link>
                            &nbsp;&nbsp;
                            <Link to="/page1">Page1</Link>
                        </div>
                        {/* routes */}
                        <Route exact path="/" component={IndexPage} />
                        <Route path="/route" component={RouteTest} />
                        <Route path="/page1" component={Page1} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
