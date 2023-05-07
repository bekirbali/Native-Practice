import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";
import Header from "./components/Header";
import { useState } from "react";
import uuid from "react-native-uuid";
import Item from "./components/Item";
import AddItem from "./components/AddItem";

const App = () => {
  const [items, setItems] = useState([
    { id: uuid.v4(), text: "Milk" },
    { id: uuid.v4(), text: "Eggs" },
    { id: uuid.v4(), text: "Bread" },
  ]);

  const deleteHandler = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header title={"Shopping List"} />
      <SafeAreaView style={styles.container}>
        <Text style={styles.color}>Bekir BALI</Text>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1682685795463-0674c065f315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80",
          }}
          style={styles.img}
        />

        <StatusBar style="auto" />
        <AddItem />
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <Item item={item} deleteHandler={deleteHandler} />
          )}
          keyExtractor={(item) => item.id}
          style={{ marginTop: 16, width: 350 }}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f5",
    alignItems: "center",
  },
  color: {
    color: "#1d5ff3",
    fontSize: 30,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
});

export default App;
