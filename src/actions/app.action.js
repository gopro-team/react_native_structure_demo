import { appAction } from 'consts/actions';
import { toggleType } from 'consts/common';

const mockData = {
  status: true,
  tags: [
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
};

export function fetchTagsCategory() {
  return {
    type: appAction.FETCH_TAGS_CATEGORY,
    promise: Promise.resolve(mockData),
  };
}

export function toggleFilter(type = toggleType.TOGGLE) {
  return {
    type: appAction.TOGGLE_FILTER,
    payload: { type },
  };
}

export function toggleTag(tagId) {
  return {
    type: appAction.TOGGLE_TAG,
    payload: { tagId },
  };
}
