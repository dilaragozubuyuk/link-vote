import TYPES from '../../constansts/constants'

const actions = {
    fetchLinks: (page) => {
        return dispatch => {
            let links = JSON.parse(localStorage.getItem('links'));
            links = links ? links : [];
            const data = [];

            for (let index = page * 5; index < page * 5 + 5; index++) {
                if (links[index]) {
                    data.push(links[index]);
                }
            }

            dispatch({
                type: TYPES.FETCH_LINKS,
                payload: {
                    loading: false,
                    list: data,
                    totalCount: links.length
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

            } catch (e) {
                dispatch({
                    type: TYPES.ADD_LINK_FAILURE,
                    payload: {
                        error: e,
                    }
                });
            }
        };
    },
    giveVote: (newLink) => {
        return dispatch => {
            let links = JSON.parse(localStorage.getItem('links'));
            links = links ? links : [];

            const index = links.findIndex(item => item.url === newLink.url)

            if (index === -1) {
                links.push(newLink);
            } else {
                links[index] = newLink;
            }

            dispatch({
                type: TYPES.GIVE_VOTE,
                payload: {
                    loading: false,
                    list: links,
                    totalCount: links.length
                }
            });
        };
    },
}


export default actions
