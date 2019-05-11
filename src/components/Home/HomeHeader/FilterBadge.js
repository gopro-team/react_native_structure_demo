import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Badge } from 'native-base';
import styles from './index.style';


export class FilterBadge extends Component {
  render() {
    return (
      <Badge
        primary
        style={styles.badge}
      >
        <Text style={styles.badgeText}>12</Text>
      </Badge>
    );
  }
}

export default FilterBadge;
