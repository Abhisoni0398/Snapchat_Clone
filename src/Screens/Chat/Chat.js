import {
  View,
  Text,
  FlatList,
  Image,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import WrapperContainer from "../../Components/WrapperContainer";
import HomeHeader from "../../Components/HomeHeader";
import styles from "./styles";
import RoundImage from "../../Components/RoundImage";
import { moderateScale } from "../../styles/responsiveSize";
import imagePath from "../../Constants/imagePath";
import actions from "../../redux/actions";

const Chat = () => {
  const [state, setState] = React.useState({
    isLoading: false,
    data: [],
    isRefreshing: false,
    page: 0,
    loadMore: false,
  });

  const { isLoading, loadMore, data, isRefreshing, page } = state;

  const updateState = (data) => setState((state) => ({ ...state, ...data }));

  useEffect(() => {
    apiHit(true, page);
  }, []);

  const apiHit = async (val, page, loadMore = false) => {
    if (loadMore) {
      updateState({ loadMore: true });
    }
    if (val) {
      updateState({ isLoading: true, loadMore: true });
    } else {
      updateState({ isRefreshing: true });
    }

    try {
      const headers = {
        "app-id": "6292413543157c411f49ea7d",
      };
      console.log(headers, "HEADERS>>>>>>");
      const res = await actions.getUsers(`?limit=10&page=${page}`, headers);
      console.log(res, "result");
      updateState({
        data: [...data, ...res.data],
        page: page + 1,
        isLoading: false,
        isRefreshing: false,
        loadMore: false,
      });
    } catch (e) {
      updateState({ isLoading: false });
      console.log(e, "ERROR RAISED");
    }
  };

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.flatStyle}>
        <View style={{ alignSelf: "center", flexDirection: "row" }}>
          <RoundImage image={item.picture} size={50} />
          <View style={{ margin: moderateScale(10) }}>
            <Text style={styles.nameStyle}>{item.firstName}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.newSnapStyle}>New Snap</Text>
              <Text style={styles.timeStyle}>{"1h"}</Text>
              <Text style={styles.streakStyle}>{`220`}</Text>
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
  const handleRefresh = () => {
    apiHit(false);
  };
  const onEndReached = () => {
    apiHit(false, page, true);
  };
  return (
    <WrapperContainer isLoading={isLoading}>
      <HomeHeader centerText="Chat" />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onEndReachedThreshold={0.04}
        ItemSeparatorComponent={() => <View style={styles.separatorStyle} />}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            tintColor="red"
          />
        }
        onEndReached={onEndReached}
        ListFooterComponent={
          loadMore && (
            <View>
              <ActivityIndicator size="large" color="red" />
            </View>
          )
        }
      />
    </WrapperContainer>
  );
};

export default Chat;
