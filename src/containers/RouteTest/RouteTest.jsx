// route test page

import React from 'react';
import { Link, Route } from "react-router-dom";

const Text = ({ match }) => (
    <div>
        {match.params.textId}
    </div>
);


export default class RouteTest extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <div>Hello Router Test Page！！！</div>
                <Link to={`${this.props.match.url}/subRoute1`}>subRoute1</Link>
                &nbsp;&nbsp;
                <Link to={`${this.props.match.url}/subRoute2`}>subRoute2</Link>
                <Route path={`${this.props.match.url}/:textId`} component={Text} />
            </div>
        );
    }
}
