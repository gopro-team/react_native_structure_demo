import { photoAction } from 'consts/actions';
import { photosListTypes } from 'consts/photo';

export const INITIAL_STATE = {
  photosList: [],
  photosListType: photosListTypes[0],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case photoAction.GET_PHOTO_RATIO_SUCCESS: {
      const { images, after } = action.options;
      const ratioList = action.payload;
      const photosWithRatio = images.map((photo, index) => ({
        ...photo,
        ratio: ratioList[index],
      }));
      if (after) {
        return {
          ...state,
          photosList: [
            ...state.photosList,
            ...photosWithRatio,
          ],
        };
      }
      return {
        ...state,
        photosList: photosWithRatio,
      };
    }

    case photoAction.CHANGE_PHOTO_LIST_TYPE: {
      const { photosListType } = state;
      let nextIndex = photosListTypes.indexOf(photosListType) + 1;
      if (nextIndex >= photosListTypes.length) {
        nextIndex = 0;
      }
      return {
        ...state,
        photosListType: photosListTypes[nextIndex],
      };
    }

    default:
      break;
  }
  return state;
};
