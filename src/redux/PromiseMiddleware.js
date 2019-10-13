import {isFSA} from 'flux-standard-action';

function isPromise(val) {
  return val && typeof val.then === 'function';
}

export default function promiseMiddleware({dispatch}) {
  return next => action => {
    if (!isFSA(action)) {
      return isPromise(action) ? action.then(dispatch) : next(action);
    }

    const {payload} = action;

    if (isPromise(payload)) {
      return payload.then(
        result =>
          dispatch({
            ...action,
            payload: result,
          }),
        error =>
          dispatch({
            ...action,
            payload: error,
            error: true,
          }),
      );
    }

    return next(action);
  };
}
