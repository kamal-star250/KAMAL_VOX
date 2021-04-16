import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const Button = ({
  onPress,
  children,
  bgcolor,
  textcolor,
  buttonwidth,
  buttonheight,
  btnborder,
  borderline,
}) => {
  return (
    <View style={{ width: "100%" }}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.buttonStyle,
          {
            backgroundColor: bgcolor,
            width: buttonwidth,
            height: buttonheight,
            borderColor: btnborder,
            borderWidth: borderline,
          },
        ]}
      >
        <Text style={[styles.textStyle, { color: textcolor }]}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: "center",
    borderRadius: 10,
    alignItems: "center",
    marginLeft: 5,
    marginRight: 5,
    justifyContent: "center",
    marginVertical: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0,
    shadowRadius: 4.65,

    elevation: 8,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: "bold",
  },
});

export default Button;
