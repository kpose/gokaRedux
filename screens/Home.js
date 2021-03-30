import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.openDrawer}
        onPress={() => navigation.openDrawer()}
      >
        <Text style={styles.drawer}>Open Drawer</Text>
      </TouchableOpacity>
      <Text style={styles.description}>
        This project uses React Navigation for navigation, Redux for state
        management and Reselect for building memoized selectors.
      </Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("PostsScreen")}
      >
        <Text>GO TO POSTS</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    height: 50,
    width: 150,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 20,
  },
  description: {
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 25,
  },
  openDrawer: {
    position: "absolute",
    top: 50,
    left: 10,
    height: 30,
    width: 120,
    backgroundColor: "#7d7b78",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  drawer: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
