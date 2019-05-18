import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import SearchEngine from 'utils/searchEngine';
import { state } from 'styles/base.style';
import ResultsBox from './ResultsBox';
import styles from './index.style';


export class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchResult: [],
      isWaiting: false,
      showResultBox: false,
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

  onFocus = () => {
    this.setState({
      showResultBox: true,
    });
  };

  onBlur = () => {
    this.setState({
      showResultBox: false,
    });
  };

  render() {
    const {
      searchText, isWaiting, searchResult, showResultBox
    } = this.state;
    return (
      <View>
        <SearchBar
          placeholder="Search for tags ..."
          onChangeText={this.updateSearch}
          value={searchText}
          containerStyle={styles.container}
          inputContainerStyle={styles.input}
          round
          showLoading={isWaiting}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        <ResultsBox
          hide={!showResultBox || !searchText}
          results={searchResult}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  allFilters: app.allFilters,
});

export default connect(mapStateToProps, null)(SearchBox);
