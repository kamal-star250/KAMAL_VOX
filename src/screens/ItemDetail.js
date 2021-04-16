import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../commanscreen/Header";

class ItemDetail extends Component {
  constructor(props) {
    super(props);
    // this.state = {  };
  }
  render() {
    return (
      <View style={{ height: "100%", backgroundColor: "#fff" }}>
        <View style={{ height: "97%" }}>
          <Header
            leftsideicon={require("../image/backwhite.png")}
            leftpress={() => this.props.navigation.goBack()}
            rightpress={() => alert("Right Pressed...!")}
            rightsideicon={require("../image/homewhite.png")}
            leftsidetext={"BACK"}
            centertext={"SETTING"}
            centerpress={() => this.props.navigation.navigate("SettingPage")}
            rightsidetext={"HOME"}
            rightpress={() =>
              this.props.navigation.navigate("RestaurentWelcome")
            }
          />
          <View style={styles.header_text_view}>
            <Text style={styles.heade_text}>SWISS CHALET</Text>
          </View>
          <View style={styles.menu_text_view}>
            <Text style={{ fontWeight: "bold", fontSize: 30 }}>
              Chicken Fingerss
            </Text>
          </View>
          <View
            style={{ flex: 1, backgroundColor: "red", paddingHorizontal: 10 }}
          >
            <View
              style={{
                height: "45%",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../image/fingers.jpg")}
                style={styles.about_image}
              />
              <Text style={styles.price}>$ 12.99</Text>
            </View>
            <View style={styles.about_text}>
              <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                Chicken fingers, also known as chicken tenders, chicken goujons,
                chicken strips, tendies or chicken fillets, are chicken meat
                prepared from the pectoralis minor muscles of the animal.
              </Text>
            </View>
            <View
              style={[
                styles.about_text,
                { flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Text style={{ fontWeight: "bold" }}>Allergy</Text>
              <Text style={{ fontSize: 16 }}> info:</Text>
              <Text style={{ paddingHorizontal: 5 }}>None</Text>
            </View>
          </View>
        </View>
        {/* Bottom View */}
        <View
          style={{
            height: "3%",
            backgroundColor: "#F3C223",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        ></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header_text_view: {
    paddingVertical: 10,
    backgroundColor: "#3C7D92",
    alignItems: "center",
  },
  heade_text: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#fff",
  },
  menu_text_view: {
    paddingVertical: 20,
    alignItems: "center",
  },
  price: {
    fontWeight: "bold",
    fontSize: 16,
    paddingVertical: 5,
  },
  about_image: {
    width: "100%",
    height: "85%",
    resizeMode: "contain",
    borderRadius: 5,
  },
  about_text: {
    paddingVertical: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },
});
export default ItemDetail;
