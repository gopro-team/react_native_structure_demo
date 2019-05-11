import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from 'react-native';
import {
  Header, Button, Left, Body, Right, Icon, Title
} from 'native-base';
import { toggleFilter } from 'actions/app';
import styles from './index.style';

export class HomeHeader extends Component {
  openDrawer = () => {
    const { navigation } = this.props;
    navigation.openDrawer();
  };

  toggleFilter = () => {
    this.props.toggleFilter();
  };

  render() {
    const { isShowFilter } = this.props;
    return (
      <Header style={styles.header}>
        <Left>
          <TouchableOpacity
            onPress={this.openDrawer}
          >
            <Icon name="menu" />
          </TouchableOpacity>
        </Left>
        <Body>
          <TouchableOpacity
            onPress={this.toggleFilter}
            style={styles.body}
          >
            <Title>Filter</Title>
            <Icon name={isShowFilter ? 'ios-arrow-up' : 'ios-arrow-down'} style={styles.iconDown} />
          </TouchableOpacity>
        </Body>
        <Right>
          <TouchableOpacity>
            <Icon name="search" />
          </TouchableOpacity>
        </Right>
      </Header>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  isShowFilter: app.isShowFilter,
});

const mapDispatchToProps = {
  toggleFilter,
};

export default withNavigation(
  connect(mapStateToProps, mapDispatchToProps)(HomeHeader),
);
