import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import imagePath from "../../Constants/imagePath";
import CirculerBtn from "../../Components/CirculerBtn";
import strings from "../../Constants/lang";
import colors from "../../styles/colors";
import HomeHeader from "../../Components/HomeHeader";
import { data } from "./data";

const Map = () => {
  const [curLoc, setCurLoc] = useState({
    latitude: 30.7993,
    longitude: 76.9149,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const mapRef = useRef(null);
  const onCenter = () => {
    console.log(mapRef, "MAPREF");
    mapRef.current.animateToRegion(curLoc);
  };
  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        style={StyleSheet.absoluteFill}
        initialRegion={curLoc}
      >
        {data.map((item, index) => {
          return <Marker coordinate={item.coords} image={item.img} />;
        })}
        <Marker coordinate={curLoc} image={imagePath.emoji2} />
      </MapView>
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
          <TouchableOpacity onPress={onCenter} style={styles.navigation}>
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
