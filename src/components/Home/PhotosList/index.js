import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, ScrollView } from 'react-native';
import {
  Container,
} from 'native-base';
import { getPhotosWithRatio } from 'actions/photo';
import Photo from './Photo';
import styles from './index.style';

export class PhotosList extends Component {
  componentDidMount() {
    this.props.getPhotosWithRatio();
    this.prefetchPhotos();
  }

  componentDidUpdate(prevProps) {
    const { photosList } = this.props;
    if (photosList !== prevProps.photosList) {
      this.prefetchPhotos();
    }
  }

  prefetchPhotos = () => {
    const { photosList } = this.props;
    Promise.all(photosList.map(photo => Image.prefetch(photo.url)))
      .then((res) => {
        this.queryPhotosCache();
      });
  };

  queryPhotosCache = () => {
    const { photosList } = this.props;
    Image.queryCache(photosList.map(photo => photo.url))
      .then((res) => {
        console.log(res);
      });
  };

  render() {
    const { photosList } = this.props;
    return (
      <ScrollView>
        <Container style={styles.list}>
          {
            photosList.map(photo => <Photo photo={photo} key={photo.id} />)
          }
        </Container>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ photo }) => ({
  photosList: photo && photo.photosList,
});

const mapDispatcToProps = {
  getPhotosWithRatio,
};

export default connect(mapStateToProps, mapDispatcToProps)(PhotosList);
