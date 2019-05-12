import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import {
  Header, Button, Left, Body, Right, Icon, Title, Text, Badge,
} from 'native-base';
import * as Animatable from 'react-native-animatable';
import { toggleFilter } from 'actions/app.action';
import FilterBadge from './FilterBadge';
import styles from './index.style';

export class HomeHeader extends Component {
  openDrawer = () => {
    const { navigation } = this.props;
    navigation.openDrawer();
  };

  toggleFilter = () => {
    this.props.toggleFilter();
  };

  renderLeft = () => {
    const { isShowFilter } = this.props;
    if (isShowFilter) {
      return (
        <Button transparent>
          <Animatable.Text
            animation="fadeIn"
            style={styles.btnText}
          >
            Clear
          </Animatable.Text>
        </Button>
      );
    }
    return (
      <TouchableOpacity
        onPress={this.openDrawer}
      >
        <Icon name="menu" />
      </TouchableOpacity>
    );
  };

  renderBody = () => {
    const { isShowFilter } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={this.toggleFilter}
      >
        <View style={styles.body}>
          <FilterBadge />
          <Text>Filter</Text>
          <Icon name={isShowFilter ? 'ios-arrow-up' : 'ios-arrow-down'} style={styles.iconDown} />
        </View>
      </TouchableWithoutFeedback>
    );
  };

  renderRight = () => {
    const { isShowFilter } = this.props;
    if (isShowFilter) {
      return (
        <Button
          transparent
          onPress={this.toggleFilter}
        >
          <Animatable.Text
            animation="fadeIn"
            style={styles.btnText}
          >
            Done
          </Animatable.Text>
        </Button>
      );
    }
    return (
      <TouchableOpacity>
        <Icon name="search" />
      </TouchableOpacity>
    );
  };

  render() {
    const { isShowFilter } = this.props;
    return (
      <View style={styles.view}>
        <Header
          style={[
            styles.header,
            ...(isShowFilter ? [styles.headerNoBorder] : [])
          ]}
        >
          <Left>
            {this.renderLeft()}
          </Left>
          <Body>
            {this.renderBody()}
          </Body>
          <Right>
            {this.renderRight()}
          </Right>
        </Header>
      </View>
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
