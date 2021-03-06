// route test page

import React from 'react';
import { Link, Route } from "react-router-dom";

import history from 'browserHistory';
import { Button } from 'react-bootstrap';

const Text = ({ match }) => (
    <div>
        {match.params.textId}
    </div>
);


export default class RouteTest extends React.Component {
    render() {
        return (
            <div>
                <div>Hello Router Test Page！</div>
                <Link to={`${this.props.match.url}/subRoute1`}>subRoute1</Link>
                &nbsp;&nbsp;
                <Link to={`${this.props.match.url}/subRoute2`}>subRoute2</Link>
                <Route path={`${this.props.match.url}/:textId`} component={Text} />
                <br />
                {/* 组件内用 */}
                <Button onClick={() => { this.props.history.push('/'); }}>HomePage</Button>
                {/* 组件外用 */}
                <Button onClick={() => { history.push('/redux'); }}>ReduxTestPage</Button>
            </div>
        );
    }
}
