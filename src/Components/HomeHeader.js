import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import colors from "../styles/colors";
import { moderateScale } from "../styles/responsiveSize";
import imagePath from "../Constants/imagePath";
import { TouchableOpacity } from "react-native-gesture-handler";
import commonStyles from "../styles/commonStyles";
import fontFamily from "../styles/fontFamily";
import RoundImage from "./RoundImage";
const HomeHeader = ({
  onPress,
  leftImg = imagePath.icBack,
  headerStyle,
  centerText,
  lastImg = imagePath.icMore,
  setting,
}) => {
  const navigation = useNavigation();
  console.log(centerText, "centerText");
  return (
    <View style={{ ...styles.container, ...headerStyle }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <RoundImage image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd-XTge8MKeoxh4boXjnOC-qunLx0eG4D5ig&usqp=CAU" />
        <Image
          source={imagePath.icSearch}
          style={{ marginLeft: moderateScale(16) }}
        />
      </View>
      <Text style={styles.textStyle}>{centerText}</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {!!setting ? (
          <TouchableOpacity>
            <Image
              source={setting}
              style={{ marginRight: moderateScale(16) }}
            />
          </TouchableOpacity>
        ) : (
          <Image
            source={imagePath.icAdd}
            style={{ marginRight: moderateScale(16) }}
          />
        )}

        <Image source={lastImg} />
      </View>
    </View>
  );
};

export default HomeHeader;
const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    minHeight: moderateScale(40),
  },
  textStyle: {
    ...commonStyles.fontSize20,
    fontFamily: fontFamily.bold,
  },
});
