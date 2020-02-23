import React from 'react';
class Links extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        let list = []
        if (this.props.list) {
            list = this.props.list.map((element, index) =>
                <li key={index}>{element.name}
                <div onClick={(e) => {element.vote++; console.log('ddd'); this.props.giveVote(element)}}>artir</div>
                <div onClick={(e) => {element.vote--; this.props.giveVote(element)}}>azalt</div></li>
            );
        }

        return <div className="list-group">
            <ul>{list}</ul></div>;
    }
}

export default Links;
