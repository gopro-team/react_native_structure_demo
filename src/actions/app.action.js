import { appAction } from 'consts/actions';
import { toggleType } from 'consts/common';

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
