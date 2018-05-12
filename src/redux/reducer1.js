const ACTION_1 = 'action/reudcer1/ACTION_1';
const ACTION_2 = 'action/reudcer1/ACTION_2';

const initState = {
    stateKey: 'state value'
};

const reducer1 = (state = initState, action) => {
    switch (action.type) {
        case ACTION_1:
            const newState1 = JSON.parse(JSON.stringify(state));
            newState1.stateKey += action.data;
            return newState1;
        case ACTION_2:
            const newState2 = JSON.parse(JSON.stringify(state));
            return newState2;
        default:
            return state;
    }
}

export const actionCreateFunction1 = (data) => ({
    type: ACTION_1,
    data: data
});
export const actionCreateFunction2 = (data) => ({
    type: ACTION_2,
    data: data
});

export default reducer1;
