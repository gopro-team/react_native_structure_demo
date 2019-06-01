import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { Image } from 'react-native-elements';
import {
  Text, View, ActivityIndicator, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { imageStyleWithRatio, getSizeFromImageUrl } from 'utils/image';
import { getTagsFromIds } from 'utils/tags';
import Tag from './Tag';
import styles from './index.style';


export class PhotoDetail extends Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {
      photoId: navigation.getParam('photoId', null),
      photo: null,
      tags: [],
      size: {
        width: 0,
        height: 0,
      },
    };
  }

  componentDidMount() {
    const { photosList } = this.props;
    const { photoId } = this.state;
    const photo = photosList.find(item => item.id === photoId);
    const tags = getTagsFromIds(photo.tags);
    this.setState({
      photo,
      tags,
    });
    getSizeFromImageUrl(photo.url).then((size) => {
      this.setState({
        size,
      });
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
        <View style={styles.likeContainer}>
          <TouchableOpacity>
            <Icon
              name="heart-outline"
              style={styles.iconFooter}
            />
          </TouchableOpacity>
          <View style={styles.likeNumberContainer}>
            <Text style={styles.likes}>
              {`${photo.likes} likes`}
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <Icon
            name="bookmark-outline"
            style={styles.iconFooter}
          />
        </TouchableOpacity>
      </View>
    );
  }

  renderPhotoDetail = () => {
    const { photo, size } = this.state;
    return (
      <View style={styles.detailContainer}>
        <View style={styles.tagsContainer}>
          {
            this.renderTags()
          }
        </View>
        <View style={styles.detail}>
          <View style={styles.row}>
            <Text style={styles.label}>Tên ảnh:</Text>
            <Text style={styles.text}>{photo.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Mô tả:</Text>
            <Text style={styles.text}>{photo.description}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Tỉ lệ:</Text>
            <Text style={styles.text}>{`${size.width} : ${size.height}`}</Text>
          </View>
        </View>
      </View>
    );
  }

  renderTags = () => {
    const { tags } = this.state;
    return tags.map(tag => (
      <Tag
        key={tag.id}
        tag={tag}
      />
    ));
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
        {
          this.renderPhotoDetail()
        }
      </View>
    );
  }
}

const mapStateToProps = ({ photo }) => ({
  photosList: photo.photosList,
});

export default withNavigation(connect(mapStateToProps, null)(PhotoDetail));
