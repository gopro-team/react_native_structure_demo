import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { imageStyleWithRatio } from 'utils/image';
import styles from './index.style';

export class Photo extends Component {
  render() {
    const { photo } = this.props;
    console.log(photo);
    return (
      <View style={styles.imageContainer}>
        <Image
          style={imageStyleWithRatio(styles.image, photo.ratio)}
          source={{ uri: photo.url }}
        />
      </View>
    );
  }
}

export default Photo;
