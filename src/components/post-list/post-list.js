import React, { Component } from 'react';
import PostListItem from '../post-list-item/post-list-item';
import {ListGroup} from 'reactstrap';
import './post-list.css';

export default class PostList extends Component {

    isEmpty = obj => {for(let key in obj){return true}return false};
    
    render() {

        const {posts, onDelete, onToggleImportant, onToggleLike} = this.props;

        const elements = posts.map((item) => {
    
                if ( typeof item === 'object' && this.isEmpty(item) ){

                    const {id, ...itemProps} = item;

                    return (
                        <li key = {id} className='list-group-item'>
                            <PostListItem
                                {...itemProps}
                                onDelete={() => onDelete(id)}
                                onToggleImportant={() => onToggleImportant(id)}
                                onToggleLike={() => onToggleLike(id)}/>
                        </li>
                    )
                }

            });

        return (
            <ListGroup className='app-list'>
                {elements}
            </ListGroup>
        )
    }
}