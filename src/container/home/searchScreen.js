import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../../assets/colors';
import {useDispatch, useSelector} from 'react-redux';
import {authSelector} from '../../redux/reducers/authReducer';
import {hp, wp} from '../../helper/responsiveScreen';
import {strings} from '../../helper/appconstant';
import {getEventData} from '../../api/api';
import {
  eventSelector,
} from '../../redux/reducers/eventReducer';
import Loader from '../../components/Loader';
import CardView from '../../components/CardView';

const SearchScreen = () => {
  const dispatch = useDispatch();
  const {userInfo} = useSelector(authSelector);
  const {eventData, loading} = useSelector(eventSelector);
  useEffect(() => {
    getEventData(dispatch, userInfo?.token);
  }, []);

  return (
    <View style={{flex: 1}}>
      <Loader loading={loading} />
      <View style={{padding: wp(5), backgroundColor: colors.whiteColor}}>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 26,
            color: colors.blackText,
          }}>{`${strings.hello} ${userInfo?.user?.usr_fname}!`}</Text>
        <Text
          style={{paddingTop: wp(1), color: colors.grey2Color, fontSize: 16}}>
          {strings.readyToDance}
        </Text>
      </View>

      <FlatList
        data={eventData}
        bounces={false}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => <CardView item={item} />}
        contentContainerStyle={styles.itemContainer}
        keyExtractor={(item, index) => item.event_date_id}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  itemContainer:{marginHorizontal: wp(3), marginTop: hp(4)}
});
