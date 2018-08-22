import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import { IndexPage } from './containers';
import { Page1 } from './containers';

import './App.css';

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>Rendering with React</Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>Components</Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic} />
        <Route
            exact
            path={match.url}
            render={() => <h3>Please select a topic.</h3>}
        />
    </div>
);

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
);

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <div>
                            <Link to="/">Home</Link>
                            &nbsp;&nbsp;
                            <Link to="/topics">Topics</Link>
                            &nbsp;&nbsp;
                            <Link to="/page1">Page1</Link>
                        </div>
                        {/* routes */}
                        <Route exact path="/" component={IndexPage} />
                        <Route path="/topics" component={Topics} />
                        <Route path="/page1" component={Page1} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
