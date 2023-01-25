import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateScale(6),
    marginVertical: moderateScale(6),
    marginHorizontal: moderateScale(12),
    shadowColor: colors.blackOpacity40,
    elevation: 5,
    borderColor: colors.white,

    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: moderateScale(8),
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    color: colors.black,
    fontFamily: fontFamily.medium,
    fontSize: textScale(14),
  },
  rating: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: moderateScale(24),
    flex: 0.8
  },
  listView: { marginVertical: moderateScale(12) }
});

export default styles