import {POSTED_SUCCESS} from "./actionTypes";
import axiosApp from "../../axios-app";

export const postedSuccess = url =>({type: POSTED_SUCCESS, url});

export const postUrl = url => {
    return async (dispatch) => {
        const response = await axiosApp.post('/', url);
        console.log(response);
        dispatch(postedSuccess(response.data));
    }
};