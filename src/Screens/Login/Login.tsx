//import liraries
import React, {Component, FC, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
//custom components
import ButtonComp from '../../Components/ButtonComp';
import WrapperContainer from '../../Components/WrapperContainer';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
//constants
import styles from './styles';
import strings from '../../constants/lang';
//custom functions
import actions from '../../redux/actions';
import {showError, showSuccess} from '../../utils/helperFunctions';
import {locationPermission} from '../../utils/permissions';
import store from '../../redux/store';
//3rd party
import {useForm} from 'react-hook-form';
import GeoLocation from 'react-native-geolocation-service';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {setUserData} from '../../utils/utils';
import {saveUserData} from '../../redux/reducers/authReducer';

// create a component
const Login: FC = (props: any) => {
  const [coords, setCoords] = useState<any>({});

  useEffect(() => {
    getLocationPermission();
  }, []);

  const getLocationPermission = async () => {
    const permissionStatus = await locationPermission();
    if (permissionStatus) {
      GeoLocation.getCurrentPosition(
        position => {
          setCoords(position.coords);
        },
        error => {},
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'onBlur'});

  let testEmail = 'Testapp@gmail.com';
  let testPassword = '@abc123';

  const login = data => {
    console.log(data['Enter email']);
    console.log(data['Password']);
    if (data['Enter email'] != testEmail) {
      showError(strings.EMAIL_ERR_MSG);
      return;
    }
    if (data['Password'] != testPassword) {
      showError(strings.PASS_ERR_MSG);
      return;
    }

    actions.setFirstTime(true);
    setUserData(coords);
    store.dispatch(saveUserData(coords));
    showSuccess('Login successful');
  };

  return (
    <WrapperContainer>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.header}>{strings.LOGIN}</Text>
          <View style={{marginTop: '30%'}}>
            <TextInputWithLabel
              control={control}
              label={strings.EMAIL_ADDRESS}
              placeholder={strings.EMAIL_ADDRESS}
              show={true}
              name={strings.EMAIL_ADDRESS}
              pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
              msg="Please enter valid email"
            />
            <TextInputWithLabel
              control={control}
              label={strings.PASSWORD}
              placeholder={strings.PASSWORD}
              show={true}
              name={strings.PASSWORD}
              secureTextEntry={true}
              pattern={/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,8}$/}
              msg="Password should contain minimum a special character and a digit."
            />
          </View>
        </View>
        <View style={styles.btnStyle}>
          <ButtonComp btnText={strings.LOGIN} onPress={handleSubmit(login)} />
        </View>
      </KeyboardAwareScrollView>
    </WrapperContainer>
  );
};
//make this component available to the app
export default Login;
