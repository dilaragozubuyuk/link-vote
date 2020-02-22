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
            let links = JSON.parse(localStorage.getItem('links'));
            if (links) {
                links.push(data);
            } else {
                links = [data];
            }
            localStorage.setItem('links', JSON.stringify(links));

            dispatch({
                type: TYPES.ADD_LINK,
                payload: {
                    loading: true,
                    link: data
                }
            });
        };
    },
}


export default actions
