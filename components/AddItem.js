import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const AddItem = ({ addItem, setAddText, addText }) => {
  const changeHandler = (newText) => {
    setAddText(newText);
  };
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.input}
        placeholder="Add item"
        onChangeText={changeHandler}
        value={addText}
      />
      <TouchableOpacity>
        <Text style={styles.btn} onPress={addItem}>
          <FontAwesome5 name="plus" style={{ fontSize: 14 }} /> Add
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#f5c1c6",
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  inputView: { width: 300 },
  btn: {
    backgroundColor: "#f4d1f5",

    textAlign: "center",
    marginTop: 12,
    borderRadius: 4,
    padding: 3,
  },
});

export default AddItem;
