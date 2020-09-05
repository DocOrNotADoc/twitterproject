import React, { Component } from 'react';
import {Button, ButtonGroup} from 'reactstrap';
import './post-status-filter.css';

export default class PostStatusFilter extends Component {
    
    buttons = [
        {name: 'all', label: 'Все'},
        {name: 'like', label: 'Понравилось'}
    ]

    render() {

        const buttons = this.buttons.map(({name, label}) => {

            const {filter, onFiletrSelect} = this.props;

            const active = filter === name;
            const clazz = active ? 'info' : 'outline-secondary'

            return (
            <Button
                key={name}
                color={clazz}
                onClick={()=>onFiletrSelect(name)}>{label}</Button>
            )
        });

        return (
            <ButtonGroup>
                {/* <Button color='info'>Все</Button>
                <Button outline color='secondary'>Понравилось</Button> */}
                {buttons}
            </ButtonGroup>
        )
    }
}