import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, FlatList } from 'react-native';
import { getPhotosWithRatio } from 'actions/photo.action';
import Photo from './Photo';
import styles from './index.style';

export class PhotosList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
    };
  }

  componentDidMount() {
    const { getPhotosWithRatio } = this.props;
    getPhotosWithRatio();
    // this.prefetchPhotos();
  }

  componentDidUpdate(prevProps) {
    const { photosList } = this.props;
    if (photosList !== prevProps.photosList) {
      this.setState({
        fetching: false,
      });
      this.prefetchPhotos();
    }
  }

  fetchMore = () => {
    const { getPhotosWithRatio, photosList } = this.props;
    const after = photosList[photosList.length - 1].id;
    getPhotosWithRatio(after);
  };

  prefetchPhotos = () => {
    const { photosList } = this.props;
    Promise.all(photosList.map(photo => Image.prefetch(photo.thumbnail_url)))
      .then((res) => {
        // this.queryPhotosCache();
      });
  };

  queryPhotosCache = () => {
    const { photosList } = this.props;
    Image.queryCache(photosList.map(photo => photo.thumbnail_url))
      .then((res) => {
        console.log(res);
      });
  };

  handleRefresh = () => {
    const { getPhotosWithRatio } = this.props;
    this.setState({
      fetching: true,
    });
    getPhotosWithRatio();
  }

  renderPhoto = ({ item }) => (
    <Photo photo={item} key={item.id.toString()} />
  );

  render() {
    const { photosList, photosListType } = this.props;
    const { fetching } = this.state;
    return (
      <FlatList
        contentContainerStyle={styles.list}
        numColumns={photosListType.columnCount}
        key={`${photosListType.columnCount}-col`}
        keyExtractor={item => item.id.toString()}
        data={photosList}
        renderItem={this.renderPhoto}
        onRefresh={this.handleRefresh}
        refreshing={fetching}
        extraData={this.state}
        onEndReached={this.fetchMore}
        onEndReachedThreshold={0.4}
      />
    );
  }
}

const mapStateToProps = ({ photo }) => ({
  photosList: photo && photo.photosList,
  photosListType: photo.photosListType,
});

const mapDispatcToProps = {
  getPhotosWithRatio,
};

export default connect(mapStateToProps, mapDispatcToProps)(PhotosList);
