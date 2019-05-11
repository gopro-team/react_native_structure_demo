export default ({ dispatch, getState }) => next => (action) => {
  // if thunk
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  // If normal
  if (!action.promise) {
    return next(action);
  }

  // If promise
  const {
    promise, type, callback, ...rest
  } = action;

  const beginAction = type;
  const successAction = `${type}_SUCCESS`;
  const failureAction = `${type}_FAILURE`;

  // Dispatch begin async request action
  next({ type: beginAction, ...rest });

  let p = promise;
  // if promise is nested in a function
  if (typeof promise === 'function') {
    p = promise(dispatch, getState);
  }

  return p.then((result) => {
    // Dispatch success action
    next({
      type: successAction,
      payload: result,
      options: rest.payload,
    });

    // Pass result to action via callback
    const response = { success: true, result };
    callback && callback(response, dispatch, getState);
    return response;
  }).catch((error) => {
    console.log('async request fail', error);

    // Dispatch async request failure action
    next({
      type: failureAction,
      payload: error,
      options: rest.payload,
    });

    // Pass error to action via callback
    const response = { success: false, error };
    callback && callback(response, dispatch, getState);
    return response;
  });
};
