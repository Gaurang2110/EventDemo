import axios from 'axios';
import {BASE_URL, apiEndPoint} from '.';
import {
  failedUserData,
  getLoading,
  setUserData,
} from '../redux/reducers/authReducer';
import {routes} from '../helper/appconstant';
import {
  eventLoading,
  failedEventData,
  setEventData,
} from '../redux/reducers/eventReducer';
import {Alert} from 'react-native';
import {CommonActions} from '@react-navigation/native';

export const loginApi = async (data, dispatch, navigation) => {
  try {
    dispatch(getLoading());
    const res = await axios.post(`${BASE_URL}${apiEndPoint.login}`, data);
    if (res.data?.success) {
      dispatch(setUserData(res.data.data));
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: routes.tab}],
        }),
      );
    } else {
      Alert.alert('Practical', res.data.message);
      dispatch(failedUserData(res.data.message));
    }
  } catch (error) {
    dispatch(failedUserData(error));
  }
};

export const getEventData = async (dispatch, data) => {
  try {
    dispatch(eventLoading());
    const res = await axios.post(
      `${BASE_URL}${apiEndPoint.eventList}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${data}`,
        },
      },
    );
    if (res.data?.success) {
      dispatch(setEventData(res.data.data?.events));
    } else {
      dispatch(failedEventData(res.data.message));
    }
  } catch (error) {
    dispatch(failedEventData(error));
  }
};
