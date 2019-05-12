import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';
import styles from './index.style';


export class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchResult: [],
      isWaiting: false,
    };
    this.timeout = [];
  }

  callSearch = () => {
    const { searchText } = this.state;
    this.setState({
      isWaiting: false,
    });
    console.warn(`search ${searchText}`);
  };

  updateSearch = (searchText) => {
    this.setState({
      searchText,
      isWaiting: true,
    }, () => {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.callSearch();
      }, 300);
    });
  };

  render() {
    const { searchText, isWaiting } = this.state;
    return (
      <SearchBar
        placeholder="Search for tags ..."
        onChangeText={this.updateSearch}
        value={searchText}
        containerStyle={styles.container}
        inputContainerStyle={styles.input}
        round
        showLoading={isWaiting}
      />
    );
  }
}

export default SearchBox;
