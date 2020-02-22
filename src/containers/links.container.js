import React from 'react';
import Links from '../components/links.component';
import { connect } from 'react-redux';
import actions from '../redux/actions/links.action';
import PaginationComponent from '../components/pagination.component'

class ListContainer extends React.Component {

    componentDidMount() {
        this.props.fetchLinks(1);
    }

    render() {
        console.log(this.props)
        return (<div>
            <Links list={this.props.list}/>
         <PaginationComponent totalCount={this.props.totalCount}/> </div>);
    }
}

const mapStateToProps = state => {
    return {
        ...state.links
    }
}

const mapDispatchToProps = dispatch => ({
    fetchLinks: (data) => {
        dispatch(actions.fetchLinks(data));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
