import React, { Component } from 'react';

import products from "../../data/products.json"
import './AppHeader.scss';

class AppHeader extends Component {
  state = {
    searchText: ''
  };

  onSearchInputChanged = (e) => {
    this.setState({
      searchText: e.target.value
    })
  }

  render() {
    const { searchText } = this.state;
    const isSearching = searchText.length > 0;
    const suggestions = products.filter(product => product.title.match(searchText));
    const suggestionsList = suggestions.map(suggestedProduct => (
      <div>{suggestedProduct.title}</div>
    ));

    return (
      <div className="app-header-component">
        <input
          type="search"
          id="gsearch"
          name="gsearch"
          placeholder="Search"
          value={searchText}
          onChange={this.onSearchInputChanged}
        />
        {
          isSearching && (
            <div className="suggestions-container">
              {suggestionsList}
            </div>
          )}

      </div>
    );
  }
}

export default AppHeader;