import React, { FC } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { moderateScale } from '../styles/responsiveSize';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';

interface Props {
    leftText: string,
    onPressRight?: () => void;
    headerStyle?: object //? means its is an optional 
}

const HeaderComp: FC<Props> = (props) => {
    const { leftText, onPressRight, headerStyle } = props
    console.log(leftText)
    return (
        <View style={{ ...styles.headerStyle, ...headerStyle }}>
            <Text style={styles.textStyle}>{leftText}</Text>
            <TouchableOpacity onPress={onPressRight}>
                <Text></Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    headerStyle: {
        minHeight: moderateScale(48),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: colors.green
    },
    textStyle: {
        ...commonStyles.fontSize18,
        fontFamily: fontFamily.medium,
        color: colors.white,
        textAlign:'center',
        paddingVertical: moderateScale(12)
    }
})

export default HeaderComp