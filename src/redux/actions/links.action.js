import TYPES from '../../constansts/constants'

const actions = {
    fetchLinks: (page, orderByVote, orderByVoteType) => {
        return dispatch => {
            let links = JSON.parse(localStorage.getItem('links'));
            links = links ? links : [];
            const data = [];

            if (links) {
                links = links.sort((a, b) => {
                    return new Date(b.created_at) - new Date(a.created_at);
                });
            }

            page = page === 1 ? 0 : page;

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
                    orderByVoteState: orderByVote,
                    orderByVoteType: orderByVoteType,
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
    giveVote: (newLink, orderByVote, orderByVoteType) => {
        return dispatch => {
            let links = JSON.parse(localStorage.getItem('links'));
            links = links ? links : [];

            const index = links.findIndex(item => item.url === newLink.url)

            if (index === -1) {
                links.push(newLink);
            } else {
                links[index] = newLink;
            }

            if (links && orderByVote && orderByVoteType) {
                links = links.sort((a, b) => {
                    return orderByVoteType === 'asc' ? new Date(b.vote) - new Date(a.vote) : new Date(a.vote) - new Date(b.vote)
                });
            }

            localStorage.setItem('links', JSON.stringify(links));

            dispatch({
                type: TYPES.GIVE_VOTE,
                payload: {
                    loading: false,
                    list: links,
                    orderByVoteState: orderByVote,
                    orderByVoteType: orderByVoteType,
                    totalCount: links.length
                }
            });
        };
    },
    orderByVote: (orderByVoteState, orderByVoteType) => {
        return dispatch => {
            let page = 1;
            let links = JSON.parse(localStorage.getItem('links'));
            links = links ? links : [];

            if (links) {
                links = links.sort((a, b) => {
                    return orderByVoteType === 'asc' ? new Date(b.vote) - new Date(a.vote) : new Date(a.vote) - new Date(b.vote);
                });
            }

            const data = [];
            page = page === 1 ? 0 : page;

            for (let index = page * 5; index < page * 5 + 5; index++) {
                if (links[index]) {
                    data.push(links[index]);
                }
            }

            dispatch({
                type: TYPES.ORDER_BY_VOTE,
                payload: {
                    loading: false,
                    list: links,
                    orderByVoteState: orderByVoteState,
                    orderByVoteType: orderByVoteType,
                    totalCount: links.length
                }
            });
        };
    },
}


export default actions
