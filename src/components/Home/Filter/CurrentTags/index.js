import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import Tag from './Tag';
import styles from './index.style';

export class CurrentTags extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItems = () => {
    const { filters } = this.props;
    return filters.map(tag => (
      <Tag
        key={tag}
        tag={tag}
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

export default connect(mapStateToProps, null)(CurrentTags);
