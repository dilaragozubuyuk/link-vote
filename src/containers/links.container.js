import React from 'react';
import Links from '../components/links.component';
import { connect } from 'react-redux';
import actions from '../redux/actions/links.action';
import PaginationComponent from '../components/pagination.component'

class ListContainer extends React.Component {

    state = {
        orderByVoteState: false,
        orderByVoteType: null,
        page: 1
    }

    componentDidMount() {
        this.props.fetchLinks(1);
    }

    render() {
        return (<div>
            <div>Sirala</div>
            <div onClick={(e) => {
                this.props.orderByVote(this.props.page, true, 'asc')
            }}>Yukarı</div>
            <div onClick={(e) => {
                this.props.orderByVote(this.props.page, true, 'desc')
            }}>Asagi</div>
            <Links list={this.props.list}
                orderByVoteType={this.props.orderByVoteType}
                orderByVote={this.props.orderByVoteState}
                page={this.props.page}
                giveVote={this.props.giveVote} />
            <PaginationComponent totalCount={this.props.totalCount} orderByVoteType={this.props.orderByVoteType}
                orderByVote={this.props.orderByVoteState} fetchLinks={this.props.fetchLinks} page={this.props.page} /> </div>);
    }
}

const mapStateToProps = state => {
    return {
        ...state.links
    }
}

const mapDispatchToProps = dispatch => ({
    fetchLinks: (page, orderByVoteState, orderByVoteType) => {
        dispatch(actions.fetchLinks(page, orderByVoteState, orderByVoteType));
    },
    giveVote: (link, page, orderByVoteState, orderByVoteType) => {
        dispatch(actions.giveVote(link, page, orderByVoteState, orderByVoteType));
    },
    orderByVote: (page, orderByVoteState, orderByVoteType) => {
        dispatch(actions.orderByVote(page, orderByVoteState, orderByVoteType));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
