import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Header from "../commanscreen/Header";
import Button from "../commanscreen/Button";

class RestaurentWelcome extends Component {
  constructor(props) {
    super(props);
    // this.state = {  };
  }
  render() {
    return (
      <View style={{ height: "100%" }}>
        <View style={{ height: "97%", backgroundColor: "#fff" }}>
          {/* header  */}
          <Header
            centertext={"SETTING"}
            centerpress={() => this.props.navigation.navigate("SettingPage")}
          />
          <View style={{ flex: 1 }}>
            {/*  Selelct  Restaurent  view  */}
            <View style={styles.page_header}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 22,
                  textAlign: "center",
                }}
              >
                Welcome to{"\n"} Swiss Chalet
              </Text>
            </View>
            {/* Logo with text view */}
            <View style={styles.logo_view}>
              <Image
                style={styles.logo}
                source={require("../image/swiss.png")}
              />
              <View style={{ width: "80%" }}>
                <Text style={styles.text}>
                  Family dished with inspiring new flavors
                </Text>
              </View>
            </View>
            {/* button view */}
            <View style={styles.bottom_button}>
              <Button
                onPress={() =>
                  this.props.navigation.navigate("SpecialCategory")
                }
                buttonheight={55}
                buttonwidth={"100%"}
                bgcolor={"#EEEEEE"}
                borderline={2}
                btnborder={"#9E9E9E"}
              >
                SPECIALS
              </Button>
              <Button
                onPress={() =>
                  this.props.navigation.navigate("MenuCategoryScreen")
                }
                buttonheight={55}
                buttonwidth={"100%"}
                bgcolor={"#EEEEEE"}
                borderline={2}
                btnborder={"#9E9E9E"}
              >
                SEE THE MENU
              </Button>
            </View>
          </View>
        </View>
        {/* footer view */}
        <View style={styles.footer_view}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  page_header: {
    justifyContent: "center",
    alignItems: "center",
    height: "15%",
  },
  logo_view: {
    height: "55%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    paddingVertical: 20,
    color: "#1D7D92",
    textAlign: "center",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  bottom_button: {
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 20,
    height: "30%",
  },
  footer_view: {
    height: "5%",
    backgroundColor: "#F3C223",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
export default RestaurentWelcome;
