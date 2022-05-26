import { StyleSheet } from "react-native";
import fontFamily from "../../styles/fontFamily";
import commonStyles from "../../styles/commonStyles";
import colors from "../../styles/colors";
import { moderateScale } from "../../styles/responsiveSize";

const styles = StyleSheet.create({
  flatStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // marginBottom: 20,
  },
  nameStyle: {
    ...commonStyles.fontSize16,
    fontFamily: fontFamily.medium,
  },
  newSnapStyle: {
    ...commonStyles.fontSize10,
    fontFamily: fontFamily.bold,
    color: colors.red,
  },
  timeStyle: {
    ...commonStyles.fontSize10,
    marginHorizontal: moderateScale(6),
    color: colors.blackOpacity50,
  },
  streakStyle: {
    ...commonStyles.fontSize10,
    fontFamily: fontFamily.bold,
  },
  separatorStyle: {
    borderBottomWidth: 0.4,
    borderBottomColor: colors.blackOpacity10,
    marginVertical: moderateScale(16),
  },
  verticalLineStyle: {
    borderRightWidth: 1,
    height: moderateScale(24),
    color: "black",
    marginHorizontal: moderateScale(10),
    borderColor: colors.blackOpacity20,
  },
  chatStyle: {
    width: moderateScale(30),
    height: moderateScale(30),
    tintColor: colors.blackOpacity50,
  },
});
export default styles;
