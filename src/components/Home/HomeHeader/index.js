import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from 'react-native';
import {
  Header, Button, Left, Body, Right, Icon, Title
} from 'native-base';
import styles from './index.style';

export class HomeHeader extends Component {
  openDrawer = () => {
    const { navigation } = this.props;
    navigation.openDrawer();
  }

  render() {
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
          <TouchableOpacity style={styles.body}>
            <Title>Filter</Title>
            <Icon name="ios-arrow-down" style={styles.iconDown} />
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

export default withNavigation(HomeHeader);
