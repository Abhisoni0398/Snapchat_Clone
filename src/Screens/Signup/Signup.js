import { Text, TouchableOpacity, View } from "react-native";
import Header from "../../Components/Header";
import React, { useState } from "react";
import WrapperContainer from "../../Components/WrapperContainer";
import TextInputWithLabel from "../../Components/TextInputWithLabel";
import strings from "../../Constants/lang/index";
import ButtonWithText from "../../Components/ButtonWithText";
import styles from "./Styles";

const Signup = () => {
  const [state, setState] = useState({
    isLoading: false,
    secureText: true,
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });
  const {
    isLoading,
    email,
    password,
    secureText,
    firstName,
    lastName,
    userName,
  } = state;
  const updateState = (data) => {
    setState((state) => ({ ...state, ...data }));
  };

  const onPressSecure = () => {
    updateState({ secureText: !secureText });
  };

  const onSignUp = () => {
    alert("LOL! Fuck you bitch");
  };

  return (
    <WrapperContainer isLoading={false}>
      <Header />
      <Text style={styles.headerStyle}>{strings.CREATE_YOUR_ACCOUNT}</Text>
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <View>
          <TextInputWithLabel
            label={strings.FIRST_NAME}
            placeholder={strings.ENTER_YOUR_FIRST_NAME}
            value={firstName}
            onChangeText={(firstName) => updateState({ firstName })}
          />
          <TextInputWithLabel
            label={strings.LAST_NAME}
            placeholder={strings.ENTER_YOUR_LAST_NAME}
            value={lastName}
            onChangeText={(lastName) => updateState({ lastName })}
          />
          <TextInputWithLabel
            label={strings.USER_NAME}
            placeholder={strings.ENTER_YOUR_USER_NAME}
            value={userName}
            onChangeText={(userName) => updateState({ userName })}
          />
          <TextInputWithLabel
            label={strings.USERNAME_OR_EMAIL}
            placeholder={strings.PLEASE_ENTER_YOUR_EMAIL}
            value={email}
            onChangeText={(email) => updateState({ email })}
          />
          <TextInputWithLabel
            label={strings.PASSWORD}
            placeholder={strings.PLEASE_ENTER_YOUR_PASSWORD}
            value={password}
            secureText={secureText}
            secureTextEntry={secureText}
            onPressSecure={onPressSecure}
            onChangeText={(password) => updateState({ password })}
          />
          {/* <TouchableOpacity>
            <Text style={styles.forgot_password}>
              {strings.FORGET_PASSWORD}
            </Text>
          </TouchableOpacity> */}
        </View>
        <ButtonWithText
          text={strings.SIGNUP_AND_ACCEPT}
          btnStyle={styles.btnStyle}
          textStyle={styles.textStyle}
          onPress={onSignUp}
        />
      </View>
    </WrapperContainer>
  );
};

export default Signup;
