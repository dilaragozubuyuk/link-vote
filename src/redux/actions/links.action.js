import TYPES from '../../constansts/constants'
import utils from '../../shared/utils.service';

const actions = {
    fetchLinks: (page, orderByVote, orderByVoteType) => {
        return dispatch => {
            let links = JSON.parse(localStorage.getItem('links'));
            links = links ? links : [];

            let data = [];
            if (links) {
                links = utils.sortByDate(links, orderByVote ? 'vote' : 'created_at', orderByVoteType)
                data = utils.paginate(page, links)
            }

            dispatch({
                type: TYPES.FETCH_LINKS,
                payload: {
                    loading: false,
                    list: data,
                    orderByVoteState: orderByVote,
                    orderByVoteType: orderByVoteType,
                    totalCount: links.length,
                    page: page
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
    giveVote: (newLink, page, orderByVote, orderByVoteType) => {
        return dispatch => {
            let links = JSON.parse(localStorage.getItem('links'));
            links = links ? links : [];

            const index = links.findIndex(item => item.url === newLink.url)

            if (index === -1) {
                links.push(newLink);
            } else {
                links[index] = newLink;
            }

            localStorage.setItem('links', JSON.stringify(links));

            let data = [];
            if (links) {
                links = utils.sortByType(links, orderByVote ? 'vote' : 'created_at', orderByVoteType)
                data = utils.paginate(page, links)
            }

            dispatch({
                type: TYPES.GIVE_VOTE,
                payload: {
                    loading: false,
                    list: data,
                    orderByVoteState: orderByVote,
                    orderByVoteType: orderByVoteType,
                    totalCount: links.length,
                    page: page
                }
            });
        };
    },
    orderByVote: (page, orderByVoteState, orderByVoteType) => {
        return dispatch => {
            let links = JSON.parse(localStorage.getItem('links'));
            links = links ? links : [];
            let data = [];

            if (links) {
                links = utils.sortByType(links, 'vote', orderByVoteType)
                data = utils.paginate(page, links)
            }

            dispatch({
                type: TYPES.ORDER_BY_VOTE,
                payload: {
                    loading: false,
                    list: data,
                    orderByVoteState: orderByVoteState,
                    orderByVoteType: orderByVoteType,
                    totalCount: links.length,
                    page: page
                }
            });
        };
    },
    removeLink: (link, page, orderByVoteState, orderByVoteType) => {
        return dispatch => {
            let links = JSON.parse(localStorage.getItem('links'));
            links = links ? links : [];

            const index = links.findIndex(item => item.url === link.url)

            links.splice(index, 1);

            localStorage.setItem('links', JSON.stringify(links));

            let data = [];

            if (links) {
                links = utils.sortByType(links, orderByVoteState ? 'vote' : 'created_at', orderByVoteType)
                data = utils.paginate(page, links)
            }

            dispatch({
                type: TYPES.REMOVE_LINK,
                payload: {
                    loading: false,
                    list: data,
                    orderByVoteState: orderByVoteState,
                    orderByVoteType: orderByVoteType,
                    totalCount: links.length,
                    page: page
                }
            });
        };
    },
}


export default actions
