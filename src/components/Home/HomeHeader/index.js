import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Header, Button, Text, Left, Body, Right, Icon, Title
} from 'native-base';
import styles from './index.style';

export class HomeHeader extends Component {
  render() {
    return (
      <Header style={styles.header}>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <TouchableOpacity style={styles.body}>
            <Title>Filter</Title>
            <Icon name="ios-arrow-down" style={styles.iconDown} />
          </TouchableOpacity>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="search" />
          </Button>
        </Right>
      </Header>
    );
  }
}

export default HomeHeader;
