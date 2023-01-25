import React, { FC } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { moderateScale } from '../styles/responsiveSize';
import colors from '../styles/colors';
import commonStyles, { hitSlopProp } from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';

interface Props {
  onPress: () => void;
  btnText: string,
  btnTextStyle?: object,
  btnStyle?: object //? means its is an optional 
}

const ButtonComp: FC<Props> = (props) => {
  const { onPress, btnText, btnStyle, btnTextStyle } = props
  return (
    <TouchableOpacity
      style={{ ...styles.btnStyle, ...btnStyle }}
      hitSlop={hitSlopProp}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={{ ...styles.btnTextStyle, ...btnTextStyle }}>{btnText}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: colors.green,
    height: moderateScale(48),
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    borderRadius: moderateScale(12),
    paddingHorizontal: moderateScale(8),
  },
  btnTextStyle: {
    // ...commonStyles.fontSize26,
    textTransform: 'uppercase',
    color: colors.black,
    fontFamily: fontFamily.bold
  },
});
export default ButtonComp;
