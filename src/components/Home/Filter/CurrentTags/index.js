import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { toggleTag } from 'actions/app.action';
import Tag from './Tag';
import styles from './index.style';

export class CurrentTags extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItems = () => {
    const { filters, toggleTag } = this.props;
    if (filters.length === 0) {
      return (
        <Text
          style={styles.noFilterText}
        >
          No filter has been applied.
        </Text>
      );
    }
    return filters.map(tag => (
      <Tag
        key={tag.id}
        tag={tag}
        toggleTag={toggleTag}
      />
    ));
  };

  render() {
    return (
      <View style={styles.view}>
        <Text>Current Filters</Text>
        <View
          style={styles.resultContainer}
        >
          {
            this.renderItems()
          }
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  filters: app.filters,
});

const mapDispatchToProps = {
  toggleTag,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTags);
