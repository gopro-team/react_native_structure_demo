import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Badge } from 'native-base';
import { countFilters } from 'selectors/app.selector';
import styles from './index.style';


export class FilterBadge extends Component {
  render() {
    const { filtersCount } = this.props;
    if (filtersCount === 0) return null;
    return (
      <Badge
        primary
        style={styles.badge}
      >
        <Text style={styles.badgeText}>{filtersCount}</Text>
      </Badge>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  filtersCount: countFilters(app),
});

export default connect(mapStateToProps, null)(FilterBadge);
