import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { Image } from 'react-native-elements';
import {
  Text, View, ActivityIndicator, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { imageStyleWithRatio } from 'utils/image';
import styles from './index.style';


export class PhotoDetail extends Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {
      photoId: navigation.getParam('photoId', null),
      photo: null,
    };
  }

  componentDidMount() {
    const { photosList } = this.props;
    const { photoId } = this.state;
    const photo = photosList.find(item => item.id === photoId);
    this.setState({
      photo,
    });
  }

  renderPhoto = () => {
    const { photo } = this.state;
    return (
      <View style={styles.imageContainer}>
        <Image
          style={imageStyleWithRatio(styles.image, photo.ratio)}
          source={{ uri: photo.url }}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
    );
  };

  renderPhotoFooter = () => {
    const { photo } = this.state;
    return (
      <View style={styles.imageFooterContainer}>
        <View style={styles.imageNameContainer}>
          <Text style={styles.imageName}>
            {photo.name}
          </Text>
        </View>
        <View style={styles.iconsFooterContainer}>
          <TouchableOpacity>
            <Icon
              name="bookmark-outline"
              style={styles.iconFooter}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="heart-outline"
              style={styles.iconFooter}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    const { photo } = this.state;
    if (!photo) return null;
    return (
      <View style={styles.container}>
        {
          this.renderPhoto()
        }
        {
          this.renderPhotoFooter()
        }
      </View>
    );
  }
}

const mapStateToProps = ({ photo }) => ({
  photosList: photo.photosList,
});

export default withNavigation(connect(mapStateToProps, null)(PhotoDetail));
