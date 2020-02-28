import {POSTED_SUCCESS} from "../actions/actionTypes";

const initialState = {
    shortUrl: ''
};

const linksReducer = (state = initialState, action) => {
    switch (action.type) {
        case POSTED_SUCCESS:
            return {
                ...state,
                shortUrl: action.url
            };
        default:
            return state
    }
};

export default linksReducer;