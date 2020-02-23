import React from 'react';
import Links from '../components/links.component';
import { connect } from 'react-redux';
import actions from '../redux/actions/links.action';
import PaginationComponent from '../components/pagination.component'

class ListContainer extends React.Component {

    state = {
        orderByVoteState: false,
        orderByVoteType: null,
        currentPage: 1
    }

    componentDidMount() {
        this.props.fetchLinks(1);
    }

    render() {
        console.log(this.props)
        return (<div>
            <div>Sirala</div>
            <div onClick={(e) => {
                this.setState({ orderByVoteState: true, orderByVoteType: 'asc' });
                this.props.orderByVote(this.state.orderByVoteState, this.state.orderByVoteType)
            }}>Yukarı</div>
            <div onClick={(e) => {
                this.setState({ orderByVoteState: true, orderByVoteType: 'desc' });
                this.props.orderByVote(this.state.orderByVoteState, this.state.orderByVoteType)
            }}>Asagi</div>
            <Links list={this.props.list}
                orderByVoteType={this.state.orderByVoteType}
                orderByVote={this.state.orderByVoteState}
                giveVote={this.props.giveVote} />
            <PaginationComponent totalCount={this.props.totalCount} /> </div>);
    }
}

const mapStateToProps = state => {
    return {
        ...state.links
    }
}

const mapDispatchToProps = dispatch => ({
    fetchLinks: (data, orderByVoteState, orderByVoteType) => {
        dispatch(actions.fetchLinks(data, orderByVoteState, orderByVoteType));
    },
    giveVote: (link, orderByVoteState, orderByVoteType) => {
        dispatch(actions.giveVote(link, orderByVoteState, orderByVoteType));
    },
    orderByVote: (orderByVoteState, orderByVoteType) => {
        dispatch(actions.orderByVote(orderByVoteState, orderByVoteType));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
