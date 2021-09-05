import React, { Component } from 'react';


class Searchbar extends Component {

    render() {
        return (
            <div>
                <h1>this is my Searchbar component</h1>
                <input type="search" id="gsearch" name="gsearch" placeholder="Search" />
            </div>
        );
    }
}

export default Searchbar;