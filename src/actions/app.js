import { appAction } from 'consts/actions';
import { toggleType } from 'consts/common';

export function testAction() {
  return {
    type: appAction.TEST_ACTION,
    payload: { text: 'helo' },
  };
}

export function toggleFilter(type = toggleType.TOGGLE) {
  return {
    type: appAction.TOGGLE_FILTER,
    payload: { type },
  };
}
