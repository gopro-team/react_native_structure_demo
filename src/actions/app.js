import { appAction } from 'consts/actions';

export function testAction() {
  return {
    type: appAction.TEST_ACTION,
    payload: { text: 'helo' },
  };
}