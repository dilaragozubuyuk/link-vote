import TYPES from '../../constansts/constants'

const actions = {
    fetchLinks: () => {
        return dispatch => {
            let links = JSON.parse(localStorage.getItem('links'));
            links = links ? links : [];

            dispatch({
                type: TYPES.FETCH_LINKS,
                payload: {
                    loading: true,
                    lists: links
                }
            });
        };
    },
    addLink: (data) => {
        return dispatch => {
            dispatch({
                type: TYPES.ADD_LINK,
                payload: {
                    loading: true,
                }
            });

            try {
                let links = JSON.parse(localStorage.getItem('links'));
                if (links) {
                    links.push(data);
                } else {
                    links = [data];
                }
                localStorage.setItem('links', JSON.stringify(links));

                dispatch({
                    type: TYPES.ADD_LINK_SUCCESS,
                    payload: {
                        loading: false,
                        toasty: true,
                    },
                    link: data
                });

            } catch(e) {
                dispatch({
                    type: TYPES.ADD_LINK_FAILURE,
                    payload: {
                        error: e,
                    }
                });
            }
        };
    },
}


export default actions
