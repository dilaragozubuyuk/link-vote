import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';
import actions from '../redux/actions/links.action';
import { ToastContainer, toast } from 'react-toastify';

class AddLink extends React.Component {
    state = {
        name: '',
        link: '',
        vote: 0,
        created_at: ''
    };

    notify = (name) => toast.success(name + " Added");

    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        if (this.props.toasty) {
            this.notify(this.state.name)
        }
        return (
            <div>
                <Form>
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
                    <Button variant="primary" type="button" onClick={(e) => {
                        this.setState({created_at: new Date()});
                        this.props.addLink(this.state)
                    }}>
                        Submit
        </Button>
                </Form>
                <ToastContainer />
            </div>)
    }
}

const mapStateToProps = state => {
    return {
        ...state.links
    }
}
const mapDispatchToProps = dispatch => ({
    addLink: (data) => {
        dispatch(actions.addLink(data));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddLink);
