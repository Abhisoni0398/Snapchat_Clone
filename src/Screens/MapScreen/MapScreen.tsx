import { View, Text, StyleSheet, Image } from "react-native";
import React, { useRef, useState, FC } from "react";
//3rd party
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import { Rating } from "react-native-ratings";
import { useSelector } from "../../redux/hooks";

import colors from "../../styles/colors";

const MapScreen: FC = (props: any) => {
  //user coordinates can be accessed from userdata
  const userData: any = useSelector((state) => state.auth.userData);
  console.log(userData?.latitude, "USERDATA++");
  //particular restaurant data
  let resData = props?.route?.params?.item;
  console.log(resData);
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        initialRegion={{
          latitude: Number(userData?.latitude),
          longitude: Number(userData?.longitude),
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        <Marker
          coordinate={{
            latitude: Number(resData?.latitude),
            longitude: Number(resData?.longitude),
          }}
        >
          <View
            style={{
              backgroundColor: colors.white,
              padding: 8,
              flexDirection: "row",
            }}
          >
            <Image
              source={{ uri: resData?.image }}
              style={{ width: 30, height: 30, borderRadius: 20 }}
            />
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: colors.black, fontSize: 8 }}>
                {resData?.title}
              </Text>
              <Rating
                startingValue={resData?.rating}
                showRating
                style={{ paddingVertical: 4 }}
                imageSize={8}
                showRating={false}
                readonly={true}
              />
            </View>
          </View>
        </Marker>
      </MapView>
    </View>
  );
};

export default MapScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
