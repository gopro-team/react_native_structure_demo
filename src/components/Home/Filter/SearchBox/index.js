import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import styles from './index.style';


export class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    return (
      <SearchBar
        platform="ios"
        placeholder="Search for tags ..."
        onChangeText={this.updateSearch}
        value={search}
        containerStyle={styles.container}
        inputContainerStyle={styles.input}
      />
    );
  }
}

export default SearchBox;
