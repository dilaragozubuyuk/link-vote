import React from 'react';

class Links extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        const list = this.props.links.map((element, index) =>
            <li key={index}>{element.name}</li>
        );

        return <div className="list-group">
            <ul>{list}</ul> </div>;
    }
}

export default Links;
