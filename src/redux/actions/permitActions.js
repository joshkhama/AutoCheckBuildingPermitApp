import { ActionTypes } from "../constants/action-types";

export const setPermits = (permits) => {
    return {
        type: ActionTypes.SET_PERMITS,
        payload: permits,
    };
};

export const selectedPermit = (permit) => {
    return {
        type: ActionTypes.SELECTED_PERMIT,
        payload: permit,
    };
};