import { photoAction } from 'consts/actions';
import store from 'store';
import { getPhotosRatio } from 'actions/photo';

export const INITIAL_STATE = {
  photosList: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case photoAction.GET_PHOTO_RATIO_SUCCESS: {
      const { photosList } = action.options;
      const ratioList = action.payload;
      const photosWithRatio = photosList.map((photo, index) => ({
        ...photo,
        ratio: ratioList[index],
      }));
      return {
        ...state,
        photosList: photosWithRatio,
      };
    }

    default:
      break;
  }
  return state;
};
