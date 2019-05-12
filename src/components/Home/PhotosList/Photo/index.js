import React, { Component } from 'react';
import { Image } from 'react-native-elements';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { imageStyleWithRatio } from 'utils/image';
import styles from './index.style';

export class Photo extends Component {
  render() {
    const { photo } = this.props;
    return (
      <TouchableOpacity style={styles.imageContainer}>
        <Image
          style={imageStyleWithRatio(styles.image, photo.ratio)}
          source={{ uri: photo.url }}
          placeholderStyle={styles.placeholder}
          PlaceholderContent={<ActivityIndicator />}
        />
      </TouchableOpacity>
    );
  }
}

export default Photo;
