import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Header from "../commanscreen/Header";
import Button from "../commanscreen/Button";

class AboutPage extends Component {
  constructor(props) {
    super(props);
    // this.state = {  };
  }
  render() {
    return (
      <View style={{ height: "100%", backgroundColor: "#fff" }}>
        <View style={{ height: "95%" }}>
          <Header
            leftsideicon={require("../image/backwhite.png")}
            leftpress={() => this.props.navigation.goBack()}
            rightpress={() => alert("Right Pressed...!")}
            rightsideicon={require("../image/homewhite.png")}
            leftsidetext={"SETTING"}
            // centertext={'ABOUT'}
            // centerpress={() => this.props.navigation.navigate('SettingPage')}
            rightsidetext={"HOME"}
            rightpress={() =>
              this.props.navigation.navigate("RestaurentWelcome")
            }
          />
          <View
            style={{
              paddingVertical: 10,
              backgroundColor: "#FBC327",
              alignItems: "center",
              height: "5%",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 12 }}>
              SWISS CHALET
            </Text>
          </View>
          <View
            style={{
              paddingVertical: 20,
              alignItems: "center",
              backgroundColor: "#EEEEEE",
              height: "10%",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 22 }}>About</Text>
          </View>

          <View style={{ paddingHorizontal: 15 }}>
            <View
              style={{
                paddingVertical: "5%",
                borderBottomColor: "red",
                borderBottomWidth: 1,
                borderBottomsColor: "#eeeeee",
                height: 150,
              }}
            >
              <TouchableOpacity>
                <Text
                  style={{
                    textDecorationLine: "underline",
                    color: "#E18585",
                    fontSize: 18,
                  }}
                >
                  Show page with credits/info**{"\n"}Need Contents
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ paddingVertical: "5%" }}>
              <TouchableOpacity>
                <Text style={{ fontStyle: "italic", fontWeight: "bold" }}>
                  Learn more about MenuVox:
                </Text>
              </TouchableOpacity>
            </View>

            <Button
              // onPress={()=>this.CreateAccount()}
              buttonheight={50}
              buttonwidth={"100%"}
              bgcolor={"#BEBEBE"}
              borderline={2}
              btnborder={"#6A6A6A"}
            >
              GO TO WEBSITE
            </Button>
          </View>

          <View style={{ position: "absolute", bottom: 15, width: "100%" }}>
            <Text style={{ textAlign: "center" }}>Version 1.0</Text>
          </View>
        </View>
        {/* Bottom View */}
        <View
          style={{
            height: "5%",
            backgroundColor: "#1D7D92",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        ></View>
      </View>
    );
  }
}

export default AboutPage;
