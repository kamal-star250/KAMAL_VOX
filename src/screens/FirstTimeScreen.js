import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";

class FirstTimeScreen extends Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }

  render() {
    return (
      <View style={{ height: "100%" }}>
        <ImageBackground
          style={styles.back_image}
          source={require("../image/largeburger.jpg")}
        ></ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  back_image: {
    width: "100%",
    height: "100%",
  },
});
export default FirstTimeScreen;
