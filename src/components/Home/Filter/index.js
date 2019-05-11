import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { View } from 'react-native-animatable';
import styles from './index.style';

export class Filter extends Component {
  render() {
    const { isShowFilter } = this.props;
    if (!isShowFilter) return null;
    return (
      <View
        animation="fadeInDown"
        style={styles.container}
      >
        <Text>Filter</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  isShowFilter: app.isShowFilter,
});

export default connect(mapStateToProps, null)(Filter);
