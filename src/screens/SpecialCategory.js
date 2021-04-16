import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import Header from "../commanscreen/Header";

class SpecialCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Categories: [
        {
          id: 0,
          categoryname: "Chicken Fingers",
          price: "$14.99",
          categotyimage: require("../image/fingers.jpg"),
        },
        {
          id: 1,
          categoryname: "Pizza",
          price: "$14.99",
          categotyimage: require("../image/pizza.jpg"),
        },
        {
          id: 2,
          categoryname: "Burger",
          price: "$14.99",
          categotyimage: require("../image/burger.jpg"),
        },
        {
          id: 3,
          categoryname: "Soop",
          price: "$14.99",
          categotyimage: require("../image/soop.jpg"),
        },
        {
          id: 3,
          categoryname: "Salate",
          price: "$14.99",
          categotyimage: require("../image/salate2.jpg"),
        },
      ],
    };
  }
  render() {
    const { Categories } = this.state;

    return (
      <View style={{ height: "100%", backgroundColor: "#fff" }}>
        <Header
          leftsideicon={require("../image/backwhite.png")}
          leftpress={() => this.props.navigation.goBack()}
          rightpress={() => alert("Right Pressed...!")}
          rightsideicon={require("../image/homewhite.png")}
          leftsidetext={"BACK"}
          centertext={"SETTING"}
          centerpress={() => this.props.navigation.navigate("SettingPage")}
          rightsidetext={"HOME"}
          rightpress={() => this.props.navigation.navigate("RestaurentWelcome")}
        />
        {/* header view */}
        <View style={styles.header_text_view}>
          <Text style={styles.heade_text}>SWISS CHALET</Text>
        </View>
        {/* menu text view */}
        <View style={styles.menu_text_view}>
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>Specials</Text>
        </View>
        {/* list container */}
        <View style={styles.list_container}>
          <View style={{ paddingVertical: 10, left: 20 }}>
            <Text style={styles.select_text}>Select a category…</Text>
          </View>
          <FlatList
            data={Categories}
            renderItem={({ item }) => (
              <View style={{ paddingVertical: 5 }}>
                <View style={styles.category_container}>
                  <View style={{ width: "30%" }}>
                    <Image
                      source={item.categotyimage}
                      style={styles.category_icon}
                    />
                  </View>
                  <View style={{ width: "70%", paddingHorizontal: 10 }}>
                    <View style={{ paddingVertical: 10 }}>
                      <Text style={styles.category_name}>
                        {item.categoryname}
                      </Text>
                    </View>
                    <View style={styles.right_side_view}>
                      <Text style={styles.category_name}>{item.price}</Text>
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate("ItemDetail")
                        }
                        style={styles.detail_btn}
                      >
                        <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                          See Detail
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
        {/* Flat List of Category  */}
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
  select_text: {
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 16,
  },
  list_container: {
    flex: 1,
    // padding: 10,
    paddingHorizontal: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: "#FBC326",
  },
  category_container: {
    width: "100%",
    height: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0,
    shadowRadius: 4.65,

    elevation: 3,
  },
  category_icon: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    // resizeMode: "contain",
  },
  category_name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  right_side_view: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  detail_btn: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#000",
  },
});
export default SpecialCategory;
