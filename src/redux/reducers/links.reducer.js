import TYPES from '../../constansts/constants'

export const initialState = {
    lists: [],
};

export const linkReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.FETCH_LINKS:
            return {
                ...state,
                lists: action.payload
            }
        default:
            return state
    }
}

export default linkReducer;
