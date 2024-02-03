import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'event',
  initialState: {
    eventData: [],
    loading: false,
    errorMsg: '',
  },
  reducers: {
    eventLoading: state => {
      state.loading = true;
    },
    setEventData: (state, {payload}) => {
      state.eventData = payload;
      state.loading = false;
    },
    failedEventData: (state, {payload}) => {
      state.loading = false;
      state.errorMsg = payload;
    },
  },
});

export default slice.reducer;
export const {eventLoading, setEventData, failedEventData} =
  slice.actions;
export const eventSelector = state => state.event;
