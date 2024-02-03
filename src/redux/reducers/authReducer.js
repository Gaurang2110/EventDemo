import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'auth',
  initialState: {
    userInfo: {},
    loading: false,
    errorMsg:''
  },
  reducers: {
    getLoading: state => {
      state.loading = true;
    },
    setUserData: (state, {payload}) => {
      state.userInfo = payload;
      state.loading = false;
      
    },
    failedUserData: (state,{payload}) => {
      state.loading = false;
      state.errorMsg= payload
    },
  },
});

export default slice.reducer;
export const {getLoading, setUserData,failedUserData} = slice.actions;
export const authSelector = state => state.auth;
