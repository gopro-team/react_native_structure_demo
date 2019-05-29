import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Button, Text } from 'native-base';
import TextTrans from 'components/Common/TextTrans';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './index.style';

export class Tag extends Component {
  render() {
    const { tag, toggleTag } = this.props;
    return (
      <Button
        rounded
        small
        iconRight
        style={styles.button}
      >
        <TextTrans
          textObject={tag.name}
          component={Text}
        />
        <TouchableOpacity
          onPress={() => toggleTag(tag.id)}
        >
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
