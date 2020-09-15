import React, { Component } from 'react';
import PostListItem from '../post-list-item/post-list-item';
import {ListGroup} from 'reactstrap';
import './post-list.css';

export default class PostList extends Component {

    posts = this.state;

    // {onDelete, onToggleImportant, onToggleLike} = this.props;

    isEmpty = obj => {
        for(let key in obj)
        {
            return true;
        }
            return false;
    }
    
    render() {

        const elements = (posts) => {
            posts.map((item) => {
    
                if ( typeof item === 'object' && this.isEmpty(item) ){ 
                    const {id, ...itemProps} = item;
                    return (
                        <li key = {id} className='list-group-item'>
                            <PostListItem
                                {...itemProps}
                                onDelete={() => this.props.onDelete(id)}
                                onToggleImportant={() => this.props.onToggleImportant(id)}
                                onToggleLike={() => this.props.onToggleLike(id)}/>
                        </li>
                    )
                }
            });
        }

        return (
            <ListGroup className='app-list'>
                {elements}
            </ListGroup>
        )
    }
}



// const PostList = ({posts, onDelete, onToggleImportant, onToggleLike}) => {

//     const elements = posts.map((item) => {

//         if ( typeof item === 'object' && isEmpty(item) ){ 
//             const {id, ...itemProps} = item;
//             return (
//                 <li key = {id} className='list-group-item'>
//                     <PostListItem
//                         {...itemProps}
//                         onDelete={() => onDelete(id)}
//                         onToggleImportant={() => onToggleImportant(id)}
//                         onToggleLike={() => onToggleLike(id)}/>
//                 </li>
//             )
//         }
//     });

//     function isEmpty(obj) {
//         for(let key in obj)
//         {
//             return true;
//         }
//             return false;
//     }

//     return (
//         <ListGroup className='app-list'>
//             {elements}
//         </ListGroup>
//     )
// }

// export default PostList;