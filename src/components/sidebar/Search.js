import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

import '../../styles/sidebar/search.css';

function Search() {
    return (
        <div className="search">
            <div className="search__container">
                <SearchIcon />
                <input placeholder="Search for chats..." type="text" />
            </div>
        </div>
    )
}

export default Search;
