import TYPES from '../../constansts/constants'

const actions = {
    fetchLinks: () => {
        return dispatch => {
            dispatch({
                type: TYPES.FETCH_LINKS,
                payload: {
                    loading: true,
                    lists: [{
                        id: '3444',
                        name: 'dilos'
                    }]
                }
            });
        };
    },
}


export default actions
