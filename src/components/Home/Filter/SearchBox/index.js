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
    const { allTagsCategory } = this.props;
    if (JSON.stringify(prevProps.allTagsCategory) === JSON.stringify(allTagsCategory)) {
      return;
    }
    this.setUpSearchEngine();
  }

  setUpSearchEngine = () => {
    const { allTagsCategory } = this.props;
    this.SearchEngine = SearchEngine.setup(allTagsCategory);
  }

  handleSearch = () => {
    const { searchText } = this.state;
    this.setState({
      isWaiting: false,
    });
    const searchResult = this.SearchEngine.search(searchText)
      .slice(0, 5);
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
      <View style={styles.view}>
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
  allTagsCategory: app.allTagsCategory,
});

export default connect(mapStateToProps, null)(SearchBox);
