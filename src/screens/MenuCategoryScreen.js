import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

import Header from "../commanscreen/Header";

class MenuCategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Categories: [
        {
          id: 0,
          categoryname: "BURGERS",
          about: "Flame broiled and fresh",
          categotyimage: require("../image/burgerdrink.png"),
        },
        {
          id: 1,
          categoryname: "SALAD",
          about: "Crispy and healthly",
          categotyimage: require("../image/sablon.png"),
        },
        {
          id: 2,
          categoryname: "SPECIALS",
          about: "Daily specials for you",
          categotyimage: require("../image/momos.png"),
        },
        {
          id: 3,
          categoryname: "DESSERTS",
          about: "Sweet treats for everyone",
          categotyimage: require("../image/drink.png"),
        },
        {
          id: 3,
          categoryname: "BEER",
          about: "On tap ar buy the bottle",
          categotyimage: require("../image/beer.png"),
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
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>
            Menu Category
          </Text>
        </View>
        {/* list container */}
        <View style={styles.list_container}>
          <View style={{ paddingVertical: 10, left: 20 }}>
            <Text style={styles.select_text}>Select a category…</Text>
          </View>
          <FlatList
            data={Categories}
            numColumns={2}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.category_container}>
                <Image
                  source={item.categotyimage}
                  style={styles.category_icon}
                />
                <View style={{ paddingVertical: 5 }}>
                  <Text style={styles.category_name}>{item.categoryname}</Text>
                </View>
                <View style={{ width: "80%", paddingVertical: 5 }}>
                  <Text style={styles.about_category_text}>{item.about}</Text>
                </View>
              </TouchableOpacity>
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
    paddingHorizontal: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: "#FBC326",
  },
  category_container: {
    width: "45%",
    height: 160,
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 10,
    margin: "2.5%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0,
    shadowRadius: 4.65,

    elevation: 8,
  },
  category_icon: {
    top: 5,
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
  category_name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  about_category_text: {
    textAlign: "center",
    color: "#1D7D92",
  },
});
export default MenuCategoryScreen;
