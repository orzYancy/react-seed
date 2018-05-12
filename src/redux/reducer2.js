const ACTION_1 = 'action/reudcer2/ACTION_1';
const ACTION_2 = 'action/reudcer2/ACTION_2';

const initState = {
    stateKey: 'state value'
};

const reducer2 = (state = initState, action) => {
    switch (action.type) {
        case ACTION_1:
            const newState1 = JSON.parse(JSON.stringify(state));
            return newState1;
        case ACTION_2:
            const newState2 = JSON.parse(JSON.stringify(state));
            return newState2;
        default:
            return state;
    }
}

export default reducer2;
