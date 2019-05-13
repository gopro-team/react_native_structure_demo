import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import SearchEngine from 'utils/searchEngine';
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
    this.SearchEngine = null;
  }

  componentDidMount() {
    this.setUpSearchEngine();
  }

  componentDidUpdate(prevProps) {
    const { allFilters } = this.props;
    if (JSON.stringify(prevProps.allFilters) === JSON.stringify(allFilters)) {
      return;
    }
    this.setUpSearchEngine();
  }

  setUpSearchEngine = () => {
    const { allFilters } = this.props;
    this.SearchEngine = SearchEngine.setup(allFilters);
  }

  handleSearch = () => {
    const { searchText } = this.state;
    this.setState({
      isWaiting: false,
    });
    const searchResult = this.SearchEngine.search(searchText);
    this.setState({
      searchResult,
    });
  };

  updateSearch = (searchText) => {
    this.setState({
      searchText,
      isWaiting: true,
    }, () => {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.handleSearch();
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

const mapStateToProps = ({ app }) => ({
  allFilters: app.allFilters,
});

export default connect(mapStateToProps, null)(SearchBox);
