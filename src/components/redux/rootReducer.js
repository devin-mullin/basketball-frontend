import { combineReducers } from 'redux';

    const rootReducer = combineReducers({
        player: playerReducer,
        team: teamReducer
    });

    export default rootReducer;