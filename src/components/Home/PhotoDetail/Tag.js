import React, { Component } from 'react';
import { Button, Text } from 'native-base';
import TextTrans from 'components/Common/TextTrans';
import styles from './index.style';

export class Tag extends Component {
  render() {
    const { tag } = this.props;
    return (
      <Button
        light
        rounded
        small
        iconRight
        style={styles.button}
      >
        <TextTrans
          textObject={tag.name}
          component={Text}
        />
      </Button>
    );
  }
}

export default Tag;
