import { Text, TouchableOpacity, View } from "react-native";
import Header from "../../Components/Header";
import React, { useState, useEffect } from "react";
import WrapperContainer from "../../Components/WrapperContainer";
import TextInputWithLabel from "../../Components/TextInputWithLabel";
import strings from "../../Constants/lang/index";
import ButtonWithText from "../../Components/ButtonWithText";
import styles from "./Styles";
import colors from "../../styles/colors";
import navigationStrings from "../../Constants/navigationStrings";
import actions from "../../redux/actions";

const Login = ({ navigation }) => {
  const [state, setState] = useState({
    isLoading: false,
    secureText: true,
    email: "",
    password: "",
    isEnable: false,
  });
  const { isLoading, email, password, secureText, isEnable } = state;
  console.log(isLoading, email, password);
  const updateState = (data) => {
    setState((state) => ({ ...state, ...data }));
  };
  useEffect(() => {
    if (email !== "" && password !== "") {
      updateState({ isEnable: true });
      return;
    }
    updateState({ isEnable: false });
  }, [email, password]);
  const onPressSecure = () => {
    updateState({ secureText: !secureText });
  };
  const onLogin = () => {
    actions.login(true);
  };

  return (
    <WrapperContainer isLoading={false}>
      <Header />
      <Text style={styles.headerStyle}>{strings.LOGIN}</Text>
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <View>
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
          <TouchableOpacity>
            <Text style={styles.forgot_password}>
              {strings.FORGET_PASSWORD}
            </Text>
          </TouchableOpacity>
        </View>
        <ButtonWithText
          text={strings.LOGIN}
          onPress={onLogin}
          isDisable={!isEnable}
          btnStyle={{
            ...styles.btnStyle,
            backgroundColor: isEnable ? colors.blue : colors.blackOpacity20,
          }}
          textStyle={styles.textStyle}
        />
      </View>
    </WrapperContainer>
  );
};

export default Login;
