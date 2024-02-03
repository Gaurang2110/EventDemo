import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../assets/colors';
import SvgIcon from '../../assets/svgs/SvgIcon';
import {hp, wp} from '../../helper/responsiveScreen';
import {strings} from '../../helper/appconstant';
import {Formik} from 'formik';
import * as yup from 'yup';
import InputLabel from '../../components/InputLabel';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {loginApi} from '../../api/api';
import {authSelector} from '../../redux/reducers/authReducer';
import Loader from '../../components/Loader';
import {useDispatch, useSelector} from 'react-redux';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [isSecure, setIsSecure] = useState(false);
  const {loading, errorMsg} = useSelector(authSelector);
  const onSubmit = data => {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);
    loginApi(formData, dispatch, navigation);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Loader loading={loading} />
      <ScrollView style={{flex: 1}} bounces={false}>
        <SvgIcon.Logo />
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{email: '', password: ''}}
          onSubmit={values => onSubmit(values)}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <View style={{marginVertical: wp(4)}}>
              <View style={{alignSelf: 'center'}}>
                <InputLabel
                  label={strings.email}
                  placeholder={strings.emailPlace}
                  value={values.email}
                  onChange={handleChange('email')}
                  onBlur={handleBlur('email')}
                  error={errors.email}
                />
                <InputLabel
                  label={strings.pwd}
                  placeholder={strings.pwd}
                  value={values.password}
                  onChange={handleChange('password')}
                  onBlur={handleBlur('password')}
                  secureText={!isSecure}
                  isEye={true}
                  onEyePress={() => setIsSecure(!isSecure)}
                  error={errors.password}
                  containerStyle={{marginBottom: wp(0)}}
                />
              </View>

              <Text style={styles.forgotText}>{strings.forgotPwd}</Text>

              <TouchableOpacity onPress={handleSubmit} style={styles.btnView}>
                <Text style={styles.font16}>{strings.signIn}</Text>
              </TouchableOpacity>
              <Text style={styles.memberView}>
                {strings.notAmember}
                <Text style={{textDecorationLine: 'underline'}}>
                  {strings.signUp}
                </Text>
              </Text>

              <View style={styles.signupView}>
                <View style={styles.line} />
                <View>
                  <Text style={styles.singInText}>{strings.signInWith}</Text>
                </View>
                <View style={styles.line} />
              </View>

              <View style={styles.rowCenter}>
                <SvgIcon.GoogleIcon />
                <SvgIcon.AppleIcon />
                <SvgIcon.FacebookIcon />
              </View>
            </View>
          )}
        </Formik>
        <Text style={styles.guestView}>{strings.enterGuest}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: colors.whiteColor},
  forgotText: {
    alignSelf: 'flex-end',
    marginRight: wp(10),
    color: colors.greyColor,
    fontSize: 12,
    fontWeight: '400',
  },
  btnView: {
    width: wp(25),
    height: wp(10),
    marginRight: wp(10),
    backgroundColor: colors.lightGreen,
    borderRadius: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(2.5),
    alignSelf: 'flex-end',
    marginBottom: hp(1.5),
  },
  font16: {
    fontWeight: '500',
    fontSize: 16,
    color: colors.whiteColor,
  },
  memberView: {
    alignSelf: 'flex-end',
    marginRight: wp(10),
    color: colors.blackColor,
    fontSize: 12,
    fontWeight: '400',
  },
  signupView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(5),
    width: wp(80),
    alignSelf: 'center',
  },
  line: {flex: 1, height: 1, backgroundColor: 'black'},
  singInText: {
    textAlign: 'center',
    paddingHorizontal: wp(1),
    color: colors.grey2Color,
    fontSize: 12,
    fontWeight: '400',
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  guestView: {
    alignSelf: 'flex-end',
    marginRight: wp(10),
    color: colors.greyColor,
    fontSize: 12,
    marginTop: hp[5],
    fontWeight: '400',
  },
});
