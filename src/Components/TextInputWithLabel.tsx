import React, {FC} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import commonStyles from '../styles/commonStyles';
import {Controller, FieldValues, Control} from 'react-hook-form';
import {ColorSchemeStore} from 'nativewind/dist/style-sheet/color-scheme';

interface Props {
  placeholder?: string;
  inputStyle?: object; //? means its is an optional
  label: string;
  name: string;
  show: boolean;
  control: any;
  secureTextEntry?: boolean;
  pattern?: RegExp | any;
  msg?: string | any;
}

const TextInputWithLabel: FC<Props> = props => {
  const {
    placeholder,
    inputStyle,
    secureTextEntry = false,
    label,
    name,
    show,
    control,
    pattern,
    msg,
  } = props;

  return (
    <View style={{}}>
      <Text style={styles.labelText}>{label} </Text>

      <Controller
        control={control}
        name={name}
        rules={{
          pattern: {
            value: pattern,
            message: msg,
          },

          required: {
            value: show,
            message: 'This field is required!',
          },
        }}
        render={({field: {onChange, value, onBlur}, fieldState: {error}}) => (
          <>
            <TextInput
              placeholder={placeholder}
              placeholderTextColor={'grey'}
              style={{
                ...styles.inputStyle,
                ...inputStyle,
                borderColor: error ? colors.red : colors.black,
                borderWidth: error ? 2 : 1,
              }}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry={secureTextEntry}
            />
            {error && (
              <Text style={{color: 'red', marginBottom: 8}}>
                {error.message}
              </Text>
            )}
          </>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputStyle: {
    ...commonStyles.fontSize14,
    backgroundColor: colors.white,
    borderRadius: moderateScale(10),
    height: moderateScale(40),
    paddingHorizontal: moderateScale(8),
    marginBottom: moderateScaleVertical(8),
    borderWidth: 1,
    borderColor: colors.blackOpacity20,
    alignItems: 'center',
    color: colors.black,
  },
  labelText: {
    ...commonStyles.fontSize16,
    fontFamily: 'Cochin',
    marginBottom: moderateScaleVertical(12),
    // textTransform: 'uppercase',
    marginTop: 18,
  },
});

export default React.memo(TextInputWithLabel);
