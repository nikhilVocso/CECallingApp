import React from "react";
import { Image, StyleSheet } from "react-native";
/////////////////////////////////////////////////////////////////////////////////
function ProfilePictureFAB({
  image = require("../../Assets/photo.jpeg"),
  onPress,
  style,
}) {
  return (
    <>
      <Image source={image} style={[styles.img, style]} onPress={onPress} />
    </>
  );
}
/////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  img: {
    width: 32,
    height: 32,
    borderRadius: 50,
  },
});
/////////////////////////////////////////////////////////////////////////////////
export default ProfilePictureFAB;
