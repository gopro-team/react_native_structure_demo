import { appAction } from 'consts/actions';
import { toggleType } from 'consts/common';
import LANG from 'consts/language';
import { convertCategoriesToTags } from 'utils/searchEngine';

export const INITIAL_STATE = {
  language: LANG.VI,
  isShowFilter: false,
  allTagsCategory: [],
  allTags: [],
  filters: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case appAction.FETCH_TAGS_CATEGORY_SUCCESS: {
      const { tags } = action.payload;
      const allTags = convertCategoriesToTags(tags);
      return {
        ...state,
        allTagsCategory: tags,
        allTags,
      };
    }

    case appAction.TOGGLE_FILTER: {
      const { type } = action.payload;
      let { isShowFilter } = state;
      if (type === toggleType.TOGGLE) {
        isShowFilter = !state.isShowFilter;
      } else if (type === toggleType.OPEN) {
        isShowFilter = true;
      } else if (type === toggleType.CLOSE) {
        isShowFilter = false;
      }
      return {
        ...state,
        isShowFilter,
      };
    }

    case appAction.TOGGLE_TAG: {
      const { tagId } = action.payload;
      const { filters, allTags } = state;
      const tag = allTags.find(tag => tag.id === tagId);
      const index = filters.map(filter => filter.id).indexOf(tag.id);
      if (index < 0) {
        filters.push(tag);
      } else {
        filters.splice(index, 1);
      }
      return {
        ...state,
        filters: [...filters],
      };
    }

    default:
      break;
  }
  return state;
};
