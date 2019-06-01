import { appAction } from 'consts/actions';
import { toggleType } from 'consts/common';
import { get } from 'utils/request';


export function fetchTagsCategory() {
  return {
    type: appAction.FETCH_TAGS_CATEGORY,
    promise: get('/tags'),
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
