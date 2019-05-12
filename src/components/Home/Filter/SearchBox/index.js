import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import styles from './index.style';


export class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchResult: [],
    };
  }

  callSearch = (searchText) => {

  };

  updateSearch = (searchText) => {
    this.setState({
      searchText,
    });
    this.callSearch(searchText);
  };

  render() {
    const { searchText } = this.state;
    return (
      <SearchBar
        placeholder="Search for tags ..."
        onChangeText={this.updateSearch}
        value={searchText}
        containerStyle={styles.container}
        inputContainerStyle={styles.input}
        round
        showLoading
      />
    );
  }
}

export default SearchBox;
