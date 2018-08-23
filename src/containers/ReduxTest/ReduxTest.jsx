// redux test page

import React from 'react';
import { connect } from 'react-redux';

import { Button } from 'react-bootstrap';

import { actionCreateFunction1 } from 'redux/reducer1';
class ReduxTest extends React.Component {
    render() {
        return (
            <div>
                <div>Hello Redux Test Page！</div>
                <Button onClick={() => { this.props.sendAction1(' action1'); }}>Dispatch Action1</Button>
                <br />
                {this.props.reducer1.stateKey}
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    state: state,
    reducer1: state.reducer1
})
const mapDispatchToProps = (dispatch) => ({
    sendAction1: (content) => {
        dispatch(actionCreateFunction1(content));
    }
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxTest);
