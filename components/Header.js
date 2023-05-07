import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    marginTop: 24,
    backgroundColor: "blue",
  },
  text: {
    fontSize: 23,
    color: "#f1f1f5",
    textAlign: "center",
  },
});

export default Header;
