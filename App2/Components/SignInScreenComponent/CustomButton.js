import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React from "react";
////////////////////////////////////////////////////////////////////////
import AppTouchableOpacity from "../AppComponents/AppTouchableOpacity";
import AppTouchableHighlight from "../AppComponents/AppTouchableHighlight";
////////////////////////////////////////////////////////////////////////

export default function CustomButton({
  onPress,
  text,
  type = "PRIMARY",
  bgColor,
  fgColor,
  containerStyle,
  IconImage,
  IconImageStyle,
}) {
  return (
    <AppTouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          containerStyle,
          styles[`container_${type}`],
          bgColor ? { backgroundColor: bgColor } : {},
        ]}
      >
        {IconImage && (
          <Image
            source={IconImage}
            style={[styles.iconImage, IconImageStyle]}
          />
        )}
        <Text
          style={[
            styles.text,
            styles[`text_${type}`],
            fgColor ? { color: fgColor } : {},
          ]}
        >
          {text}
        </Text>
      </View>
    </AppTouchableOpacity>
  );
}

//////////// Main: CSS /////////////
const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  container_PRIMARY: {
    backgroundColor: "blue",
  },

  container_TERTIARY: {},

  container_SECONDARY: {
    borderColor: "blue",
    borderWidth: 2,
  },

  iconImage: {
    // borderRadius: 100,
    width: 32,
    height: 32,
    marginRight: 10,
  },

  text: {
    fontWeight: "bold",
    color: "white",
  },

  text_TERTIARY: {
    color: "gray",
  },

  text_SECONDARY: {
    color: "blue",
  },
});
