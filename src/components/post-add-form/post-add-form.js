import React, {Component} from 'react';
import { Button, Form, Input } from 'reactstrap';
import styled from 'styled-components';

import './post-add-form.css';

export default class PostAddForm extends Component {

    state = {
        text: ''
    }

    onValueChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.text)
        this.setState({
            text: ''
        })
    }

    render() {

        return (
            <Form 
                className='bottom-panel'
                onSubmit={this.onSubmit}>
                <Input
                    type='text'
                    placeholder='О чём вы думаете сейчас?'
                    className='new-post-label'
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <Button
                    type='submit'
                    color='outline-secondary'>
                        Добавить
                </Button>
            </Form>
        )
    }
}