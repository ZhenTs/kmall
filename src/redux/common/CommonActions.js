import {createAction} from 'redux-actions';
import * as types from '../ActionTypes';

export const toast = createAction(types.TOAST, (text, timeout) => {
  return {
    text,
    timeout,
    id: new Date().getTime(),
  };
});

export const maskViewHandler = createAction(types.MASKVIEW, isShow => {
  return {
    isShow: isShow,
  };
});

export const tipModal = createAction(types.TIPMODAL, () => {
  return {
    modalVisible: true,
    id: new Date().getTime(),
  };
});

export const messageTip = createAction(types.MESSAGETIP, (text, timeout) => {
  return {
    text,
    timeout,
    id: new Date().getTime(),
  };
});
