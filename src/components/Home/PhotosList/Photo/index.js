import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { Image } from 'react-native-elements';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { imageStyleWithRatio } from 'utils/image';
import styles from './index.style';

export class Photo extends Component {
  handleGoToDetail = () => {
    const { navigation, photo } = this.props;
    navigation.push('PhotoDetail', {
      photoId: photo.id,
    });
  }

  render() {
    const { photo, photosListType } = this.props;
    return (
      <TouchableOpacity
        style={styles(photosListType.type).imageContainer}
        onPress={this.handleGoToDetail}
      >
        <Image
          style={imageStyleWithRatio(styles(photosListType.type).image, photo.ratio)}
          source={{ uri: photo.url }}
          placeholderStyle={styles().placeholder}
          PlaceholderContent={<ActivityIndicator />}
        />
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = ({ photo }) => ({
  photosListType: photo.photosListType,
});

export default withNavigation(connect(mapStateToProps, null)(Photo));
