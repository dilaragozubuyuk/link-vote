import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';
import actions from '../redux/actions/links.action';

class AddLink extends React.Component {
    state = {
        name: '',
        link: '',
        vote: 0
    };

    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <Form onSubmit={e => this.props.addLink(this.state)}>
                    <Form.Group controlId="linkName">
                        <Form.Label>Enter link name</Form.Label>
                        <Form.Control type="text" name="name" value={this.state.name}
                            onChange={event => this.setState({ name: event.target.value })}
                        />
                    </Form.Group>

                    <Form.Group controlId="linkUrl">
                        <Form.Label>Enter link URL</Form.Label>
                        <Form.Control type="text" name="url" value={this.state.url}
                            onChange={event => this.setState({ url: event.target.value })}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
        </Button>
                </Form></div>)
    }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
    addLink: (data) => {
        dispatch(actions.addLink(data));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddLink);
