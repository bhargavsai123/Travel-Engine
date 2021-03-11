import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./screens/LoginScreen";
import SignUp from "./screens/Signup";
import Tripslist from "./screens/Trips";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const switchNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      },
    },
    "Sign Up": {
      screen: SignUp,
      navigationOptions: {
        header: null,
      },
    },
    Trips: {
      screen: Tripslist,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
  },
  {
    initialRouteName: "Login",
  }
);

const AppContainer = createAppContainer(switchNavigator);
