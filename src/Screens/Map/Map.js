import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import imagePath from "../../Constants/imagePath";
import CirculerBtn from "../../Components/CirculerBtn";
import strings from "../../Constants/lang";
import colors from "../../styles/colors";
import HomeHeader from "../../Components/HomeHeader";

const Map = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={StyleSheet.absoluteFill}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <View style={styles.headerView}>
        <HomeHeader setting={imagePath.icSetting} centerText="Panchkula" />
      </View>
      <View style={styles.bottomView}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CirculerBtn text={strings.MY_BITMOJI} />
          <TouchableOpacity style={styles.navigation}>
            <Image source={imagePath.icNavigation} />
          </TouchableOpacity>
          <CirculerBtn text={strings.FRIENDS} />
        </View>
      </View>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  headerView: {
    position: "absolute",
    top: 20,
    left: 24,
    right: 24,
  },
  bottomView: {
    position: "absolute",
    bottom: 24,
    left: 24,
    right: 24,
  },
  navigation: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
});
