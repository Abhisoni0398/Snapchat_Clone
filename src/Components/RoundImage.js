import { View, Text, Image } from "react-native";
import React from "react";
import { moderateScale } from "../styles/responsiveSize";

const RoundImage = ({ size = 40, image }) => {
  console.log(image, "image");
  return (
    <Image
      source={{ uri: image }}
      style={{
        width: moderateScale(size),
        height: moderateScale(size),
        borderRadius: moderateScale(size / 2),
      }}
    />
  );
};

export default RoundImage;
