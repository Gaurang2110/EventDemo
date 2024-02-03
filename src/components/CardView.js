import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../helper/responsiveScreen';
import {colors} from '../assets/colors';
import SvgIcon from '../assets/svgs/SvgIcon';

const CardView = ({item}) => {
  return (
    <View key={item?.event_date_id} style={styles.mainContainer}>
      <View style={styles.arrowStyle}>
        <SvgIcon.ArrowRightIcon />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={{uri: item?.event_profile_img}}
          style={styles.imgView}
          resizeMode="contain"
          borderRadius={wp(2)}
        />
        <View style={{flex: 1}}>
          <Text style={styles.font16}>{item?.event_name}</Text>
          <View style={styles.rowSpaceBetween}>
            <Text style={styles.font12}>
              {`${item?.readable_from_date} ${
                item?.readable_to_date && `- ${item?.readable_to_date}`
              }`}
            </Text>
            <Text
              style={styles.font11}>{`${item?.city}, ${item?.country}`}</Text>
          </View>
          <Text
            style={
              styles.priceText
            }>{`€${item?.event_price_from} - €${item?.event_price_to}`}</Text>
          <View style={styles.danceView}>
            <View style={styles.danceSubView}>
              {item?.danceStyles?.map(e => (
                <View key={e?.ds_id} style={styles.tagView}>
                  <Text style={styles.tagText}>{e?.ds_name}</Text>
                </View>
              ))}
            </View>

            <View style={styles.rowEnd}>
              <SvgIcon.ShareIcon />
              <TouchableOpacity activeOpacity={0.7} style={{marginLeft: wp(1.5)}}>
                {item?.isFavorite > 0 ? (
                  <SvgIcon.FillFavIcon />
                ) : (
                  <SvgIcon.FavIcon />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardView;

const styles = StyleSheet.create({
  mainContainer: {
    padding: wp(3),
    borderRadius: wp(2),
    backgroundColor: colors.whiteColor,
    marginBottom: hp(1.5),
  },
  arrowStyle: {alignSelf: 'flex-end', position: 'absolute'},
  imgView: {width: wp(20), height: wp(20)},
  font16: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.blackText,
    paddingHorizontal: wp(2),
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: wp(1),
  },
  font12: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.greenText,
    paddingHorizontal: wp(2),
  },
  font11: {
    fontSize: 11,
    fontWeight: '400',
    color: colors.greyColor,
  },
  priceText: {
    fontWeight: '500',
    fontSize: 11,
    color: colors.greyColor,
    paddingHorizontal: wp(2),
  },
  danceView: {
    marginTop: wp(1),
    flexDirection: 'row',
    alignItems: 'center',
  },
  danceSubView: {flexDirection: 'row', flex: 1},
  tagView: {
    paddingHorizontal: wp(2),
    paddingVertical: wp(1),
    backgroundColor: colors.lightBlue,
    borderRadius: wp(20),
    marginRight: wp(2.5),
  },
  tagText: {
    fontWeight: '500',
    fontSize: 12,
    color: colors.blackText,
  },
  rowEnd: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
