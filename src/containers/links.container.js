import React from 'react';
import Links from '../components/links.component';
import { connect } from 'react-redux';
import actions from '../redux/actions/links.action';
import PaginationComponent from '../components/pagination.component'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import {
    Link
  } from "react-router-dom";
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
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-sm-4 submit-link">
                            <div className="row">
                                <div className="col">
                                    <span className="plus-icon">+</span>
                                </div>
                                <div className="col">
                                    <Link className="add-link" to="/add-link">Submit A link</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-sm-4">
                            <DropdownButton id="dropdown-item-button" title="Order By">
                                <Dropdown.Item as="button" onClick={(e) => {
                                    this.props.orderByVote(this.props.page, true, 'asc')
                                }}>Most Voted (Z -> A)</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => {
                                    this.props.orderByVote(this.props.page, true, 'desc')
                                }} as="button">Less Voted (A -> Z)</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-sm-4">
                            <Links list={this.props.list}
                                orderByVoteType={this.props.orderByVoteType}
                                orderByVote={this.props.orderByVoteState}
                                page={this.props.page}
                                removeLink={this.props.removeLink}
                                giveVote={this.props.giveVote} />
                            <div className="row">
                                <PaginationComponent totalCount={this.props.totalCount} orderByVoteType={this.props.orderByVoteType}
                                    orderByVote={this.props.orderByVoteState} fetchLinks={this.props.fetchLinks} page={this.props.page} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
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
    },
    removeLink: (link, page, orderByVoteState, orderByVoteType) => {
        dispatch(actions.removeLink(link, page, orderByVoteState, orderByVoteType));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
