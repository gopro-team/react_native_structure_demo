import { photoAction } from 'consts/actions';
import { getRatioFromImageUrl } from 'utils/image';

const mockData = {
  photosList: [
    {
      id: 1,
      url: 'https://via.placeholder.com/400x300',
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 3,
      url: 'https://via.placeholder.com/300x300',
    },
    {
      id: 4,
      url: 'https://via.placeholder.com/150x160',
    },
    {
      id: 5,
      url: 'https://via.placeholder.com/150',
    },
    {
      id: 6,
      url: 'https://via.placeholder.com/300x300',
    },
    {
      id: 8,
      url: 'https://via.placeholder.com/150',
    },
    {
      id: 9,
      url: 'https://via.placeholder.com/300x300',
    },
    {
      id: 10,
      url: 'https://via.placeholder.com/150x180',
    },
    {
      id: 11,
      url: 'https://via.placeholder.com/150',
    },
    {
      id: 12,
      url: 'https://via.placeholder.com/160x90',
    },

    {
      id: 13,
      url: 'https://via.placeholder.com/160x90',
    },

    {
      id: 14,
      url: 'https://via.placeholder.com/160x90',
    },
  ],
};

export function getPhotos() {
  return {
    type: photoAction.GET_PHOTO,
    promise: Promise.resolve(mockData),
  };
}

export function getPhotosWithRatio() {
  return dispatch => dispatch(getPhotos())
    .then(res => dispatch(getPhotosRatio(res.result.photosList)));
}

export function getPhotosRatio(photosList) {
  return {
    type: photoAction.GET_PHOTO_RATIO,
    payload: { photosList },
    promise: Promise.all(photosList.map(photo => getRatioFromImageUrl(photo.url))),
  };
}
