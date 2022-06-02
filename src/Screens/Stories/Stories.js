import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import WrapperContainer from "../../Components/WrapperContainer";
import HomeHeader from "../../Components/HomeHeader";
import React, { useState } from "react";
import { data } from "../../Constants/data";
import RoundImage from "../../Components/RoundImage";
import { moderateScale } from "../../styles/responsiveSize";
import styles from "./styles";
import strings from "../../Constants/lang";
import imagePath from "../../Constants/imagePath";

const Stories = () => {
  const [state, setState] = useState({
    isLoading: false,
  });

  const { isLoading } = state;

  const renderStories = ({ item, index }) => {
    return (
      <View style={{ alignItems: "center" }}>
        <RoundImage image={item.img} size={80} />
        <Text style={styles.nameStyle}>{item.name}</Text>
      </View>
    );
  };

  const renderQuickAdd = ({ item, index }) => {
    return (
      <View style={styles.quickAdd}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <RoundImage image={item.img} size={60} />
          <View style={{marginLeft: moderateScale(8)}}>
            <Text style={styles.nameAddStyle}>{item.name}</Text>
            <Text>Recently joined</Text>
          </View>
        </View>
        <View style={{flexDirection:'row', alignItems:'center', marginHorizontal: 8}}>
          <TouchableOpacity style={styles.btnText}>
            <Text style={styles.addFriendText}>+  Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.close}>
            <Image source={imagePath.icClose} /> 
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <WrapperContainer isLoading={isLoading}>
      <HomeHeader centerText={strings.STORIES} />
      <View style={{ flex: 1 }}>
        <Text style={styles.headerStyle}>{strings.FRIENDS}</Text>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={renderStories}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => (
              <View style={{ marginRight: moderateScale(16) }} />
            )}
          />
        </View>
        <Text style={[styles.headerStyle, { paddingTop: moderateScale(8) }]}>
          {strings.QUICK_ADD}
        </Text>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={renderQuickAdd}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => (
              <View style={{ marginRight: moderateScale(16) }} />
            )}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default Stories;
