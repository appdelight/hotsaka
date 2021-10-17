import { Dispatch } from "redux";
import { GetPosts } from "../../services";
import { ActionType, ActionTypes } from "../ActionTypes";
import { PostObject } from "./Post.action";


// ---------------------------------action-interfaces---------------------------
export interface ConfitAction {
    type: ActionType.SET_CONFIG,
    payload: ConfigState
}

// -----------------------------------action-creators--------------------------

export type ConfigState = {
    isMobile?: boolean,
    lang?: string,
    height?: number,
    width?: number
}
export const setConfig = (payload: ConfigState) => {
    return async function (dispatch: Dispatch<ActionTypes>) {
        dispatch({
            type: ActionType.SET_CONFIG,
            payload: payload
        })
    }
}
