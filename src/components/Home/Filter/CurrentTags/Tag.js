import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './index.style';

export class Tag extends Component {
  render() {
    return (
      <Button
        rounded
        small
        iconRight
        style={styles.button}
      >
        <Text>Hello</Text>
        <TouchableOpacity>
          <Icon
            name="ios-close-circle"
            style={styles.iconClose}
          />
        </TouchableOpacity>
      </Button>
    );
  }
}

export default Tag;
