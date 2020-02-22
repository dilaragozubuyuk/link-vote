import React from 'react';
import Pagination from 'react-bootstrap/Pagination'
import { connect } from 'react-redux';
import actions from '../redux/actions/links.action';

class PaginationComponent extends React.Component {

    state = {
        currentPage: 1
    }
    constructor(props) {
        super(props);
    }

    render() {
        let items = [];
        let pageCount = this.props.totalCount / 5
        for (let number = 1; number <= pageCount; number++) {
          items.push(
            <Pagination.Item key={number} active={number === this.state.currentPage} onClick={e => {
                this.setState({currentPage: number})
                this.props.fetchLinks(number) } }>
              {number}
            </Pagination.Item>,
          );
        }

        const paginationBasic = (
          <div>
            <Pagination>{items}</Pagination>
            {/* <Pagination size="sm">{items}</Pagination> */}
          </div>
        );

        return <div> {paginationBasic} </div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(PaginationComponent);