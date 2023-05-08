import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Item = ({ item, deleteHandler }) => {
  return (
    <TouchableOpacity>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <FontAwesome5
          name={"trash"}
          style={{ color: "firebrick", fontSize: 18 }}
          onPress={() => deleteHandler(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: "#f4f5f1",
    borderColor: "#eee",
    borderBottomWidth: 1,
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    borderStyle: "dashed",
  },
  listItemText: {
    fontSize: 18,
  },
});

export default Item;
