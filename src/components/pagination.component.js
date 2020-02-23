import React from 'react';
import Pagination from 'react-bootstrap/Pagination'

class PaginationComponent extends React.Component {

  render() {
    let items = [];
    let pageCount = Math.ceil(this.props.totalCount / 5);
    for (let number = 1; number <= pageCount; number++) {
      items.push(
        <Pagination.Item key={number} active={number === this.props.page} onClick={e => {
          this.props.fetchLinks(number, this.props.orderByVote, this.props.orderByVoteType)
        }}>
          {number}
        </Pagination.Item>,
      );
    }

    const paginationList = (
      <div>
        <Pagination>{items}</Pagination>
      </div>
    );

    return <div> {paginationList} </div>;
  }
}

export default PaginationComponent;
