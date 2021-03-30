import React from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
const Posts = ({ navigation, item }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.body}>{item.body}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Posts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    width: 300,
    backgroundColor: "#7d7b7a",
    marginBottom: 10,
    borderRadius: 10,

    shadowColor: "#9aba70",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  body: {
    marginBottom: 10,
    marginLeft: 10,
    color: "#fff",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
    marginBottom: 10,
    marginTop: 5,
  },
});
