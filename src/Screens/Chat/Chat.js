import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import WrapperContainer from "../../Components/WrapperContainer";
import HomeHeader from "../../Components/HomeHeader";
import { data } from "../../Constants/data";
import styles from "./styles";
import RoundImage from "../../Components/RoundImage";
import { moderateScale } from "../../styles/responsiveSize";
import imagePath from "../../Constants/imagePath";

const Chat = () => {
  const renderItem = ({ item, index }) => {
    console.log(item.img, "ITEMITEM");
    return (
      <View style={styles.flatStyle}>
        <View style={{ alignSelf: "center", flexDirection: "row" }}>
          <RoundImage image={item.img} size={50} />
          <View style={{ margin: moderateScale(10) }}>
            <Text style={styles.nameStyle}>{item.name}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.newSnapStyle}>New Snap</Text>
              <Text style={styles.timeStyle}>{item.time}</Text>
              <Text style={styles.streakStyle}>{item.streak}</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <RoundImage
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYuh4x6d5h3yMX2WlzZQlt0kLCrqf9dgNvMA&usqp=CAU"
            }
            size={20}
          />
          <View style={styles.verticalLineStyle} />
          <Image style={styles.chatStyle} source={imagePath.icChat} />
        </View>
      </View>
    );
  };
  return (
    <WrapperContainer>
      <HomeHeader centerText="Chat" />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separatorStyle} />}
      />
    </WrapperContainer>
  );
};

export default Chat;
