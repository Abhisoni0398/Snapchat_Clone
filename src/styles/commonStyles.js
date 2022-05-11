import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from "./responsiveSize";
import fontFamily from "./fontFamily";
import colors from "./colors";
export default StyleSheet.create({
  fontSize10: {
    fontSize: textScale(10),
    fontFamily: fontFamily.regular,
    color: colors.black,
  },
  fontSize12: {
    fontSize: textScale(12),
    fontFamily: fontFamily.regular,
    color: colors.black,
  },
  fontSize14: {
    fontSize: textScale(14),
    fontFamily: fontFamily.regular,
    color: colors.black,
  },
  fontSize16: {
    fontSize: textScale(16),
    fontFamily: fontFamily.regular,
    color: colors.black,
  },
  fontSize20: {
    fontSize: textScale(20),
    fontFamily: fontFamily.regular,
    color: colors.black,
  },
});
