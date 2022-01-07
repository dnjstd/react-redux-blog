//Ducks 구조 - Reducer 파일 안에 액션타입과 액션생성자 함수를 함께 넣어서 관리하고 이를 ‘모듈’ 이라 함.

import { createAction, handleAction, handleActions } from 'redux-actions';
import produce from 'immer';

//액션 타입
const CHANGE_FILED = 'auth/CHANGE_FILED';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

export const changeField = createAction(
  CHANGE_FILED,
  ({ form, key, value }) => ({
    form,
    key, //username,password,passwordConfirm
    value, //실제 바꾸려는 값
  }),
);

//액션 생성 함수
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

//초기값
const initialState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  },
};

//리듀서 - 변화를 일으키는 함수 , 파라미터- state,action
const auth = handleAction(
  {
    [CHANGE_FILED]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value; //state.register.username을 바꾼다
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
  },
  initialState,
);

export default auth;
