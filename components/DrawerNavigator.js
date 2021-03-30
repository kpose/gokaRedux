import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TopPostsScreen from "../screens/TopPostsScreen";
import Home from "../screens/Home";

const Drawer = createDrawerNavigator();

const SideNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="PostsScreen" component={TopPostsScreen} />
    </Drawer.Navigator>
  );
};

export default SideNavigator;
