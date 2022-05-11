import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import colors from "../styles/colors";
import commonStyles from "../styles/commonStyles";
import fontFamily from "../styles/fontFamily";
import { moderateScaleVertical } from "../styles/responsiveSize";
import { Icon } from "react-native-elements";
import strings from "../Constants/lang";

const TextInputWithLabel = ({
  label,
  value,
  placeholder,
  onChangeText,
  secureText,
  inputStyle,
  textStyle,
  onPressSecure,
  ...props
}) => {
  return (
    <View style={{ marginBottom: moderateScaleVertical(12) }}>
      <Text style={styles.lableStyle}>{label}</Text>
      <View
        style={{
          ...styles.inputStyle,
          ...inputStyle,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TextInput
          value={value}
          style={{ flex: 1 }}
          placeholder={placeholder}
          onChangeText={onChangeText}
          {...props}
        />
        {onPressSecure && (
          <TouchableOpacity onPress={onPressSecure}>
            {secureText ? (
              <Icon type="font-awesome" size={24} name="eye" />
            ) : (
              <Icon type="font-awesome" size={24} name="eye-slash" />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TextInputWithLabel;

const styles = StyleSheet.create({
  inputStyle: {
    color: "black",
    borderBottomWidth: 1,
    borderBottomColor: colors.blackOpacity20,
  },
  lableStyle: {
    ...commonStyles.fontSize14,
    textTransform: "uppercase",
    color: colors.blackOpacity50,
    fontFamily: fontFamily.bold,
  },
});
