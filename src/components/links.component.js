import React from 'react';
class Links extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        // let active = 1;
        // let items = [];
        // let pageCount = this.props.links.length / 5
        // for (let number = 1; number <= pageCount; number++) {
        //   items.push(
        //     <Pagination.Item key={number} active={number === active}>
        //       {number}
        //     </Pagination.Item>,
        //   );
        // }

        // const paginationBasic = (
        //   <div>
        //     <Pagination>{items}</Pagination>
        //     {/* <Pagination size="sm">{items}</Pagination> */}
        //   </div>
        // );
        let list = []
        if (this.props.list) {
            list = this.props.list.map((element, index) =>
            <li key={index}>{element.name}</li>
        );
        }


        return <div className="list-group">
            <ul>{list}</ul></div>;
    }
}

export default Links;
