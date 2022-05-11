import { StyleSheet } from "react-native";
import fontFamily from "../../styles/fontFamily";
import commonStyles from "../../styles/commonStyles";
import colors from "../../styles/colors";
import { moderateScale } from "../../styles/responsiveSize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  headerStyle: {
    ...commonStyles.fontSize20,
    textAlign: "center",
    fontFamily: fontFamily.bold,
    marginBottom: moderateScale(34),
  },
  forgot_password: {
    ...commonStyles.fontSize16,
    textAlign: "center",
    color: colors.blue,
    fontFamily: fontFamily.bold,
  },
  btnStyle: {
    borderRadius: moderateScale(64),
    height: moderateScale(48),
    backgroundColor: colors.blackOpacity20,
    justifyContent: "center",
    marginHorizontal: moderateScale(34),
  },
  textStyle: {
    textAlign: "center",
    ...commonStyles.fontSize20,
    fontFamily: fontFamily.bold,
    color: colors.white,
  },
});
export default styles;
