import React, {Component} from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

import './app.css';
// import style from './App.module.css';
import styled from 'styled-components';
// import nextId from "react-id-generator";

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

export default class App extends Component {

    constructor(props) {
        super(props);
        // this.itemId = nextId();
        this.state = {
            data: [
                {label: 'Going to learn React', important: true, like: false, id: 1},
                {label: 'That is so good', important: false, like: false, id: 2},
                {label: 'I need a break...', important: false, like: false, id: 3}
            ],
            term: '',
            filter: 'all'
        };
        this.maxId=4;
    }
    
    deleteItem = id => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }
    addItem = body => {
        if (body !== '') {
            const newItem = {
                label: body,
                important: false,
                id: this.maxId++
            }
            this.setState(({data}) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            });
        }
    }
    onToggle = ({id, isImportant = false, isLike = false}) => {

        this.setState(({data}) => {

            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old};

            if (isImportant) {
                newItem.important = !old.important;
            }

            if (isLike) {
                newItem.like = !old.like;
            }

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }
    onToggleImportant = id => {
        this.onToggle({id: id, isImportant: true});
    }
    onToggleLike = id => {
        this.onToggle({id: id, isLike: true})
    }
    searchPost = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter((item)=>{
            return item.label.indexOf(term) > -1
        });
    }
    filterPost = (items, filter) => {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }
    onUpdateSearch = (term) => {
        this.setState({term});
    }
    onFiletrSelect = (filter) => {
        this.setState({filter});
    }

    render() {

        const {data, term, filter} = this.state;
        const allPosts = data.length;
        const liked = data.filter(item => item.like).length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <AppBlock>
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}/>
                <div className='search-panel'>
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter
                        filter={filter}
                        onFiletrSelect={this.onFiletrSelect}/>
                </div>
                <PostList
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLike={this.onToggleLike}/>
                <PostAddForm
                    onAdd={this.addItem}/>
            </AppBlock>
        )
    }
}