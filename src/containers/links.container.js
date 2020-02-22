import React from 'react';
import Links from '../components/links.component';
import { connect } from 'react-redux';
import actions from '../redux/actions/links.action';

class ListContainer extends React.Component {

    componentDidMount() {
        this.props.fetchLinks();
    }

    render() {
        return <Links links={this.props.links} />;
    }
}

const mapStateToProps = state => {
    return {
        links: state.links.lists
    }
}


const mapDispatchToProps = dispatch => ({
    fetchLinks: () => {
        dispatch(actions.fetchLinks());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
