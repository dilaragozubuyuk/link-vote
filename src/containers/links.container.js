import React from 'react';
import Links from '../components/links.component';
import {connect} from 'react-redux';
import {fetchLinks } from '../redux/actions/links.action';

class ListContainer extends React.Component {
    state = { links: [] };

    componentDidMount() {
        this.props.fetchLinks();
    }

    render() {
        return <Links links={this.state.links} />;
    }
}

const mapStateToProps = state => state.links;

const mapDispatchToProps = dispatch => ({
    fetchLinks: () => {
        dispatch(fetchLinks());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
