import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';
import actions from '../redux/actions/links.action';
import { ToastContainer, toast } from 'react-toastify';
import {
    Link
} from "react-router-dom";
class AddLink extends React.Component {
    state = {
        name: '',
        link: '',
        vote: 0,
        created_at: new Date()
    };

    notify = (name) => toast.success(name + " Added");

    render() {
        return (
            <div className="container">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-sm-4 submit-link">
                            <div className="row">
                                <div className="col">
                                    <Link className="add-link" to="/list">Return to list</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                    <Button variant="primary add" type="button" onClick={(e) => {
                        this.setState({ created_at: new Date() });
                        this.props.addLink(this.state)
                        this.notify(this.state.name)
                    }}>
                        ADD
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
