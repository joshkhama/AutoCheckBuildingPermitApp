import { combineReducers } from "redux";
import { permitReducer, selectedPermitReducer } from "./permitReducer";

const reducers = combineReducers({
    allPermits: permitReducer,
    permit: selectedPermitReducer,
});

export default reducers;