import { photoAction } from 'consts/actions';
import { getRatioFromImageUrl } from 'utils/image';
import { get } from 'utils/request';
import { mockPhotosMore, mockPhotos } from 'consts/mock';

export function getPhotos() {
  return {
    type: photoAction.GET_PHOTO,
    promise: get('/images/pagination'),
  };
}

export function getMorePhotos(after) {
  return {
    type: photoAction.GET_MORE_PHOTO,
    promise: get('/images/pagination', { after }),
  };
}

export function getPhotosWithRatio(after = null) {
  let getAction = getPhotos;
  if (after) {
    getAction = getMorePhotos;
  }
  return dispatch => dispatch(getAction(after))
    .then(res => dispatch(getPhotosRatio(res.result.images, after)));
}

export function getPhotosRatio(images, after) {
  return {
    type: photoAction.GET_PHOTO_RATIO,
    payload: { images, after },
    promise: Promise.all(images.map(photo => getRatioFromImageUrl(photo.thumbnail_url))),
  };
}

export function changePhotosListType() {
  return {
    type: photoAction.CHANGE_PHOTO_LIST_TYPE,
  };
}
