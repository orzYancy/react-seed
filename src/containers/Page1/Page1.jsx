
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
// 引用路径todo
// import { actionCreateFunction1 } from 'redux/reducer1';
import { actionCreateFunction1 } from '../../redux/reducer1';
class Page1 extends React.Component {
    render() {
        return (
            <div>
                {this.props.reducer1.stateKey}
                <Button onClick={() => { this.props.sendAction1('action1'); }}>Dispatch</Button>
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
// 注解方式todo
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Page1);
