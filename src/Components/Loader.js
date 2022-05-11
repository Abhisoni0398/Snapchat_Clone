import { View, Text, StyleSheet, ActivityIndicator, Modal } from "react-native";
import React from "react";

const Loader = ({ isLoading }) => {
  if (isLoading) {
    return (
      <Modal>
        <View style={styles.Loader}>
          <ActivityIndicator size={24} color="red" />
        </View>
      </Modal>
    );
  }
  return null;
};

export default Loader;
const styles = StyleSheet.create({
  Loader: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,1)",
  },
});
