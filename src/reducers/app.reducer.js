import { appAction } from 'consts/actions';
import { toggleType } from 'consts/common';
import LANG from 'consts/language';

export const INITIAL_STATE = {
  language: LANG.VI,
  isShowFilter: false,
  allFilters: {
    costume: [
      {
        id: 'ao_dai',
        name: {
          vi: 'Áo Dài',
          en: 'Long Dress',
        }
      }
    ],
    background: [
      {
        id: 'song_ho',
        name: {
          vi: 'Sông hồ',
          en: 'Lake',
        }
      },
      {
        id: 'nui',
        name: {
          vi: 'Núi',
          en: 'Mountain',
        }
      },
    ],
  },
  filters: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case appAction.TEST_ACTION:
      return {
        ...state,
      };

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
      const { filters } = state;
      const index = filters.indexOf(tagId);
      if (index < 0) {
        filters.push(tagId);
      } else {
        filters.splice(index, 1);
      }
      return {
        ...state,
        filters,
      };
    }

    default:
      break;
  }
  return state;
};
