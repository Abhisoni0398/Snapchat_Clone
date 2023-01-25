import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: moderateScale(18)
  },
  button: {
    backgroundColor: colors.green,
    padding: moderateScale(12),
    borderRadius: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    color: colors.black,
    fontSize: moderateScale(24),
    marginTop: '20%',
    fontFamily: fontFamily.regular,
  },
  btnStyle: {flex: 1, justifyContent: 'flex-end', marginHorizontal: moderateScale(16), marginTop: moderateScale(40), marginBottom: moderateScale(24)}
});

export default styles