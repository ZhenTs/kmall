import * as types from '../ActionTypes';

const initialState = {
  toast: {
    text: null,
    timeout: 2000,
    id: null,
  },
  maskView: {
    isShow: false,
  },
  tipModal: {
    modalVisible: true,
    id: null,
  },
  messageTip: {
    text: null,
    timeout: 5000,
    id: null,
  },
};

export default function(state = initialState, action) {
  const {payload = {}} = action;
  switch (action.type) {
    case types.TIPMODAL:
      return {
        ...state,
        tipModal: {
          ...state.tipModal,
          ...payload,
        },
      };
    case types.TOAST:
      return {
        ...state,
        toast: {
          ...state.toast,
          ...payload,
        },
      };
    case types.MASKVIEW:
      return {
        ...state,
        maskView: {
          ...state.maskView,
          ...payload,
        },
      };
    case types.MESSAGETIP:
      return {
        ...state,
        messageTip: {
          text: payload.text,
          timeout: payload.timeout || state.messageTip.timeout,
          id: payload.id,
        },
      };
    default:
      return state;
  }
}
