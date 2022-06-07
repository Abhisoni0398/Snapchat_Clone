import { StyleSheet } from "react-native";
import fontFamily from "../../styles/fontFamily";
import commonStyles from "../../styles/commonStyles";
import colors from "../../styles/colors";
import { moderateScale, moderateScaleVertical, width } from "../../styles/responsiveSize";

const styles = StyleSheet.create({
  flatStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // marginBottom: 20,
  },
  nameStyle: {
    ...commonStyles.fontSize14,
    fontFamily: fontFamily.medium,
    marginTop: moderateScale(6),
  },
  headerStyle: {
    ...commonStyles.fontSize20,
    fontFamily: fontFamily.bold,
    marginHorizontal: moderateScale(10),
    marginVertical: moderateScale(8),
  },
  quickAdd: {
    width: width/1.24,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    borderRadius: moderateScale(8),
    margin: 2,
    padding: moderateScale(8),
    shadowColor: colors.blackOpacity30,
    shadowOpacity: 0.4,
    shadowOffset: {width:0, height: 1},
    elevation: 20,
  },
  nameAddStyle:{
    ...commonStyles.fontSize16,
    fontFamily: fontFamily.medium,
  },
  btnText: {
    backgroundColor:"#e803fc",
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScaleVertical(6),
    borderRadius: moderateScale(16),
    
  },
  addFriendText: {
    color: colors.white,
    fontSize: 14,

  },
  close: {
    marginLeft: moderateScale(8), 
    backgroundColor: '#ffe6e6',
    padding: 5,
    borderRadius: 16
    },
    subscritpionView:{
    width: moderateScale(120), 
    height: moderateScale(180),
    padding: moderateScale(8)
  },
discoverView:{
  // width: moderateScale(120), 
  height: moderateScale(180),
  margin: moderateScale(8),
  flex: 1,
  padding: 8
}

});
export default styles;
