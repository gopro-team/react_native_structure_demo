import { photoAction } from 'consts/actions';
import { getRatioFromImageUrl } from 'utils/image';

const mockData = {
  images: [
    {
      id: 1,
      url: 'https://via.placeholder.com/400x300',
      tags: [
        'uniform',
        'office',
      ],
      thumbnail_url: 'https://via.placeholder.com/200x150',
      description: 'Hello, this is description',
      likes: 1,
      like_by: [
        'user_id_2',
      ],
      name: 'Ten cua anh',
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      tags: [
        'uniform',
        'office',
      ],
      thumbnail_url: 'https://via.placeholder.com/200x150',
      description: 'Hello, this is description',
      likes: 1,
      like_by: [
        'user_id_2',
      ],
      name: 'Ten cua anh',
    },
    {
      id: 3,
      url: 'https://via.placeholder.com/300x300',
      tags: [
        'uniform',
        'office',
      ],
      thumbnail_url: 'https://via.placeholder.com/200x150',
      description: 'Hello, this is description',
      likes: 1,
      like_by: [
        'user_id_2',
      ],
      name: 'Ten cua anh',
    },
    {
      id: 4,
      url: 'https://via.placeholder.com/150x160',
      tags: [
        'uniform',
        'office',
      ],
      thumbnail_url: 'https://via.placeholder.com/200x150',
      description: 'Hello, this is description',
      likes: 1,
      like_by: [
        'user_id_2',
      ],
      name: 'Ten cua anh',
    },
    {
      id: 5,
      url: 'https://via.placeholder.com/150',
      tags: [
        'uniform',
        'office',
      ],
      thumbnail_url: 'https://via.placeholder.com/200x150',
      description: 'Hello, this is description',
      likes: 1,
      like_by: [
        'user_id_2',
      ],
      name: 'Ten cua anh',
    },
    {
      id: 6,
      url: 'https://via.placeholder.com/300x300',
      tags: [
        'uniform',
        'office',
      ],
      thumbnail_url: 'https://via.placeholder.com/200x150',
      description: 'Hello, this is description',
      likes: 1,
      like_by: [
        'user_id_2',
      ],
      name: 'Ten cua anh',
    },
    {
      id: 8,
      url: 'https://via.placeholder.com/150',
      tags: [
        'uniform',
        'office',
      ],
      thumbnail_url: 'https://via.placeholder.com/200x150',
      description: 'Hello, this is description',
      likes: 1,
      like_by: [
        'user_id_2',
      ],
      name: 'Ten cua anh',
    },
    {
      id: 9,
      url: 'https://via.placeholder.com/300x300',
      tags: [
        'uniform',
        'office',
      ],
      thumbnail_url: 'https://via.placeholder.com/200x150',
      description: 'Hello, this is description',
      likes: 1,
      like_by: [
        'user_id_2',
      ],
      name: 'Ten cua anh',
    },
    {
      id: 10,
      url: 'https://via.placeholder.com/150x180',
      tags: [
        'uniform',
        'office',
      ],
      thumbnail_url: 'https://via.placeholder.com/200x150',
      description: 'Hello, this is description',
      likes: 1,
      like_by: [
        'user_id_2',
      ],
      name: 'Ten cua anh',
    },
    {
      id: 11,
      url: 'https://via.placeholder.com/150',
      tags: [
        'uniform',
        'office',
      ],
      thumbnail_url: 'https://via.placeholder.com/200x150',
      description: 'Hello, this is description',
      likes: 1,
      like_by: [
        'user_id_2',
      ],
      name: 'Ten cua anh',
    },
    {
      id: 12,
      url: 'https://via.placeholder.com/160x90',
      tags: [
        'uniform',
        'office',
      ],
      thumbnail_url: 'https://via.placeholder.com/200x150',
      description: 'Hello, this is description',
      likes: 1,
      like_by: [
        'user_id_2',
      ],
      name: 'Ten cua anh',
    },
    {
      id: 13,
      url: 'https://via.placeholder.com/160x90',
      tags: [
        'uniform',
        'office',
      ],
      thumbnail_url: 'https://via.placeholder.com/200x150',
      description: 'Hello, this is description',
      likes: 1,
      like_by: [
        'user_id_2',
      ],
      name: 'Ten cua anh',
    },
    {
      id: 14,
      url: 'https://via.placeholder.com/160x90',
      tags: [
        'uniform',
        'office',
      ],
      thumbnail_url: 'https://via.placeholder.com/200x150',
      description: 'Hello, this is description',
      likes: 1,
      like_by: [
        'user_id_2',
      ],
      name: 'Ten cua anh',
    },
    {
      id: 15,
      url: 'https://via.placeholder.com/150',
      tags: [
        'uniform',
        'office',
      ],
      thumbnail_url: 'https://via.placeholder.com/200x150',
      description: 'Hello, this is description',
      likes: 1,
      like_by: [
        'user_id_2',
      ],
      name: 'Ten cua anh',
    },
    {
      id: 16,
      url: 'https://via.placeholder.com/300x300',
      tags: [
        'uniform',
        'office',
      ],
      thumbnail_url: 'https://via.placeholder.com/200x150',
      description: 'Hello, this is description',
      likes: 1,
      like_by: [
        'user_id_2',
      ],
      name: 'Ten cua anh',
    },
    {
      id: 17,
      url: 'https://via.placeholder.com/150x180',
      tags: [
        'uniform',
        'office',
      ],
      thumbnail_url: 'https://via.placeholder.com/200x150',
      description: 'Hello, this is description',
      likes: 1,
      like_by: [
        'user_id_2',
      ],
      name: 'Ten cua anh',
    },
    {
      id: 18,
      url: 'https://via.placeholder.com/150',
      tags: [
        'uniform',
        'office',
      ],
      thumbnail_url: 'https://via.placeholder.com/200x150',
      description: 'Hello, this is description',
      likes: 1,
      like_by: [
        'user_id_2',
      ],
      name: 'Ten cua anh',
    },
    {
      id: 19,
      url: 'https://via.placeholder.com/160x90',
      tags: [
        'uniform',
        'office',
      ],
      thumbnail_url: 'https://via.placeholder.com/200x150',
      description: 'Hello, this is description',
      likes: 1,
      like_by: [
        'user_id_2',
      ],
      name: 'Ten cua anh',
    },
    {
      id: 20,
      url: 'https://via.placeholder.com/160x90',
      tags: [
        'uniform',
        'office',
      ],
      thumbnail_url: 'https://via.placeholder.com/200x150',
      description: 'Hello, this is description',
      likes: 1,
      like_by: [
        'user_id_2',
      ],
      name: 'Ten cua anh',
    },
    {
      id: 21,
      url: 'https://via.placeholder.com/160x90',
      tags: [
        'uniform',
        'office',
      ],
      thumbnail_url: 'https://via.placeholder.com/200x150',
      description: 'Hello, this is description',
      likes: 1,
      like_by: [
        'user_id_2',
      ],
      name: 'Ten cua anh',
    },
    {
      id: 22,
      url: 'https://via.placeholder.com/150',
      tags: [
        'uniform',
        'office',
      ],
      thumbnail_url: 'https://via.placeholder.com/200x150',
      description: 'Hello, this is description',
      likes: 1,
      like_by: [
        'user_id_2',
      ],
      name: 'Ten cua anh',
    },
    {
      id: 23,
      url: 'https://via.placeholder.com/300x300',
      tags: [
        'uniform',
        'office',
      ],
      thumbnail_url: 'https://via.placeholder.com/200x150',
      description: 'Hello, this is description',
      likes: 1,
      like_by: [
        'user_id_2',
      ],
      name: 'Ten cua anh',
    },
    {
      id: 24,
      url: 'https://via.placeholder.com/150x180',
      tags: [
        'uniform',
        'office',
      ],
      thumbnail_url: 'https://via.placeholder.com/200x150',
      description: 'Hello, this is description',
      likes: 1,
      like_by: [
        'user_id_2',
      ],
      name: 'Ten cua anh',
    },
    {
      id: 25,
      url: 'https://via.placeholder.com/150',
      tags: [
        'uniform',
        'office',
      ],
      thumbnail_url: 'https://via.placeholder.com/200x150',
      description: 'Hello, this is description',
      likes: 1,
      like_by: [
        'user_id_2',
      ],
      name: 'Ten cua anh',
    },
  ],
};

export function getPhotos(after = null) {
  return {
    type: photoAction.GET_PHOTO,
    promise: Promise.resolve(mockData),
  };
}

export function getPhotosWithRatio() {
  return dispatch => dispatch(getPhotos())
    .then(res => dispatch(getPhotosRatio(res.result.images)));
}

export function getPhotosRatio(images) {
  return {
    type: photoAction.GET_PHOTO_RATIO,
    payload: { images },
    promise: Promise.all(images.map(photo => getRatioFromImageUrl(photo.url))),
  };
}

export function changePhotosListType() {
  return {
    type: photoAction.CHANGE_PHOTO_LIST_TYPE,
  };
}
