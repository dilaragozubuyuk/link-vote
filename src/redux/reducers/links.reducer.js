import TYPES from '../../constansts/constants'

export const initialState = {
    lists: [],
};

export const linkReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.FETCH_LINKS:
            return {
                ...state,
                ...action.payload
            }
        case TYPES.GIVE_VOTE:
            return {
                ...state,
                ...action.payload
            }
        case TYPES.ADD_LINK:
            return { ...state, ...action.payload }
        case TYPES.ADD_LINK_SUCCESS:
            return {
                ...action.payload,
                links: [
                    ...state.lists,
                    action.link
                ]
            }
        case TYPES.ORDER_BY_VOTE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default linkReducer;
