import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import {ListGroup} from 'reactstrap';
import './post-list.css';

const PostList = ({posts}) => {

    const elements = posts.map((item) => {

        if ( typeof item === 'object' && isEmpty(item) ){ 
            const {id, ...itemProps} = item;
            return (
                <li key = {id} className='list-group-item'>
                    <PostListItem {...itemProps}/>
                </li>
            )
        }
    });

    function isEmpty(obj) {
        for(let key in obj)
        {
            return true;
        }
            return false;
    }

    return (
        <ListGroup className='app-list'>
            {elements}
        </ListGroup>


        // <ul className='app-list list-group'>
        //     {elements}
        // </ul>
    )
}

export default PostList;


// пока, не смог сделать, чтобы PostList видел и использовал переменные из PostListItem.
// поэтому не получается собрать elements
// хотел менять bgcolor если важно:
/* .app-list .list-group-item.important {
  background-color: #ffffcc;
  border-color: #ffff99;
} */

// export default class PostList extends PostListItem {

//     elements = ({posts}) => {
//         posts.map((item) => {

//             const {important} = this.state;

//             let cardBG = 'list-group-item';

//             if (important) {
//                 cardBG += ' important';
//             }

//             function isEmpty(obj) {
//                 for(let key in obj)
//                 {
//                     return true;
//                 }
//                     return false;
//             }

//             if ( typeof item === 'object' && isEmpty(item) ){ 

//                 const {id, ...itemProps} = item;

//                 return (
//                     <li key = {id} className={cardBG}>
//                         <PostListItem {...itemProps}/>
//                     </li>
//                 )
//             }
//         });
//     }
    
//     render() {

//         return (
//             <>
//             <ul className='app-list list-group'>
//                 {this.elements}
//             </ul>
//             </>
//         )
//     }
// }