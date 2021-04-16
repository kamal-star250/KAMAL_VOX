import React, { Component } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import ErrorScreen from "./src/screens/ErrorScreen";
import Header from "./src/commanscreen/Header";
import RestaurentWelcome from "./src/screens/RestaurentWelcome";
import MenuCategoryScreen from "./src/screens/MenuCategoryScreen";
import SpecialCategory from "./src/screens/SpecialCategory";
import ItemDetail from "./src/screens/ItemDetail";
import SettingPage from "./src/screens/SettingPage";
import Button from "./src/commanscreen/Button";
import AboutPage from "./src/screens/AboutPage";
import FeedbackPage from "./src/screens/FeedbackPage";
import FirstTimeScreen from "./src/screens/FirstTimeScreen";
import RestaurentSelect from "./src/screens/RestaurentSelect";

function AllScreenStack({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false} initialRouteName="RestaurentSelect">
        <Stack.Screen name="Header" component={Header} />
        <Stack.Screen name="Button" component={Button} />
        <Stack.Screen name="FirstTimeScreen" component={FirstTimeScreen} />
        <Stack.Screen name="RestaurentSelect" component={RestaurentSelect} />
        <Stack.Screen name="RestaurentWelcome" component={RestaurentWelcome} />
        <Stack.Screen name="SpecialCategory" component={SpecialCategory} />
        <Stack.Screen
          name="MenuCategoryScreen"
          component={MenuCategoryScreen}
        />
        <Stack.Screen name="ItemDetail" component={ItemDetail} />
        <Stack.Screen name="SettingPage" component={SettingPage} />
        <Stack.Screen name="AboutPage" component={AboutPage} />
        <Stack.Screen name="FeedbackPage" component={FeedbackPage} />
        {/* <Stack.Screen name="Permission" component={Permission} /> */}
        <Stack.Screen name="ErrorScreen" component={ErrorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AllScreenStack;
