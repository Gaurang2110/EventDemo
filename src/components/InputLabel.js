import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {hp, wp} from '../helper/responsiveScreen';
import {colors} from '../assets/colors';
import SvgIcon from '../assets/svgs/SvgIcon';

const InputLabel = ({
  label,
  placeholder,
  onChange,
  onBlur,
  value,
  error,
  secureText,
  isEye = false,
  onEyePress,containerStyle
}) => {
  return (
    <View style={[styles.mainContainer,containerStyle]}>
      <Text
        style={{
          fontWeight: '400',
          fontSize: 16,
          color: colors.grey1Color,
        }}>
        {label}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          ...styles.inputContainer,
        }}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.greyColor}
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
          autoCapitalize='none'
          keyboardType='email-address'
          secureTextEntry={secureText}
            style={{flex:1}}
        />
        {isEye && (
          <TouchableOpacity onPress={() => onEyePress()}>
            {secureText ? (
              <SvgIcon.EyeOffIcon width={wp(4)} height={wp(4)} />
            ) : (
              <SvgIcon.EyeIcon />
            )}
          </TouchableOpacity>
        )}
      </View>

      {error && <Text style={{fontWeight: '400', fontSize: 12, color: colors.error}}>
        {error}
      </Text>}
    </View>
  );
};

export default InputLabel;

const styles = StyleSheet.create({
  mainContainer: {width: wp(80), marginBottom: hp(1.5)},
  inputContainer: {
    width: wp(80),
    borderRadius: wp(1),
    backgroundColor: colors.whiteColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: wp(2.5),

    elevation: 5,
    marginVertical: hp(1),
  },
});
