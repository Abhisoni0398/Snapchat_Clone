import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import WrapperContainer from "../../Components/WrapperContainer";
import HomeHeader from "../../Components/HomeHeader";
import { data } from "../../Constants/data";
import styles from "./styles";
import RoundImage from "../../Components/RoundImage";

const Chat = () => {
  const renderItem = ({ item, index }) => {
    console.log(item.img, "ITEMITEM");
    return (
      <View style={styles.flatStyle}>
        <RoundImage image={item.img} />
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
      />
    </WrapperContainer>
  );
};

export default Chat;
