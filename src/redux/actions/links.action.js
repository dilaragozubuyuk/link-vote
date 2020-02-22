import TYPES from '../../constansts/constants'

export const fetchLinks = params => (dispatch) => {
    return dispatch({
        type: TYPES.FETCH_LINKS,
        loading: true
    })
}
