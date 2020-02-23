import React from 'react';
class Links extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let list = []
        if (this.props.list) {
            list = this.props.list.map((element, index) =>
                <li key={index}>
                    <div className="link-list">
                        <div className="link-vote">
                            <div>
                                <div className="vote-number">{element.vote}</div>
                                <div>POINTS</div>
                            </div>
                        </div>
                        <div className="link-name">
                            <div>
                                <h3>{element.name}</h3>
                            </div>
                            <div>
                                {element.url}
                            </div>
                            <div className="vote">
                                <span onClick={(e) => { element.vote++; this.props.giveVote(element, this.props.page, this.props.orderByVote, this.props.orderByVoteType) }}>Up Vote</span>
                                <span className="down-vote" onClick={(e) => { element.vote--; this.props.giveVote(element, this.props.page, this.props.orderByVote, this.props.orderByVoteType) }}>Down Vote</span>
                            </div>
                        </div>
                    </div>
                </li>
            );
        }

        return <div className="row">
            <ul>{list}</ul></div>;
    }
}

export default Links;
