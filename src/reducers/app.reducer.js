import { appAction } from 'consts/actions';
import { toggleType } from 'consts/common';
import LANG from 'consts/language';

export const INITIAL_STATE = {
  language: LANG.VI,
  isShowFilter: false,
  allTagsCategory: [
    {
      id: 'costume',
      categoryName: {
        vi: 'Costume',
        en: 'Trang phục',
      },
      tags: [
        {
          id: 'long-dress',
          name: {
            vi: 'Áo dào',
            en: 'Long dress'
          },
        },
        {
          id: 'uniform',
          name: {
            vi: 'Đồng phục',
            en: 'Uniform'
          },
        },
        {
          id: 'sport',
          name: {
            vi: 'Sport',
            en: 'Thể thao'
          }
        },
        {
          id: 'office',
          name: {
            vi: 'Công sở',
            en: 'Office'
          },
        },
        {
          id: 'skirt',
          name: {
            vi: 'Váy',
            en: 'Skirt'
          },
        }
      ]
    },
    {
      id: 'background',
      categoryName: {
        vi: 'Background',
        en: 'Bối cảnh',
      },
      tags: [
        {
          id: 'mountain',
          name: {
            vi: 'Núi',
            en: 'Mountain'
          },
        },
        {
          id: 'river',
          name: {
            vi: 'Sông hồ',
            en: 'River',
          }
        },
        {
          id: 'stairs',
          name: {
            vi: 'Cầu thang',
            en: 'Stairs',
          }
        },
        {
          id: 'trees',
          name: {
            vi: 'Cây cối',
            en: 'Trees'
          },
        }
      ]
    },
  ],
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
