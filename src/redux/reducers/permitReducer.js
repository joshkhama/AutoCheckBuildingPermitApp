import { ActionTypes } from "../constants/action-types";

const initialState = {
    permits: [],
}

export const permitReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PERMITS:
            return {...state, permits: payload};

        default:
            return state;
    }
}

export const selectedPermitReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PERMIT:
            return { ...state, ...payload };

        default:
            return state;
    }
}