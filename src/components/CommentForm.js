import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';

class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    handleSubmit(event) {
        this.toggleModal();
        alert("Rating: " + this.rating.value + " Author: " + this.author.value
            + " Comment: " + this.comment.value);
        event.preventDefault();
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <Button outline onClick={this.toggleModal}>
                            <span className="fa fa-pencil fa-lg"></span> Submit Comment
                        </Button>
                    </div>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor='rating'>Rating</Label>
                                <Input type='select' name='rating' id='rating'
                                    innerRef={(input) => this.rating = input}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='author'>Your Name</Label>
                                <Input type='text' name='author' id='author'
                                    placeholder='Your Name'
                                    innerRef={(input) => this.author = input}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='comment'>Comment</Label>
                                <Input type='textarea' name='comment' id='comment'
                                    rows="6"
                                    innerRef={(input) => this.comment = input}
                                />
                            </FormGroup>
                            <Button type='submit' value="submit" className='primary'>Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }

}

export default CommentForm;