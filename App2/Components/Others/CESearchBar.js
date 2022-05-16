import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
////////////////////////////////////////////////////////////////////////////////////////////////
import AppColors from "../../Config/AppColors";
import AppTouchableOpacity from "../AppComponents/AppTouchableOpacity";
import ProfilePictureFAB from "./ProfilePictureFAB";
////////////////////////////////////////////////////////////////////////////////////////////////
function CESearchBar({
  image = require("../../Assets/photo.jpeg"),
  onPress = () => console.log("On Press"),
  placeholder = "PlaceHolder",
  style,
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <AppTouchableOpacity style={[styles.container, style]} onPress={onPress}>
        <View style={[styles.container]}>
          <Searchbar
            clearIcon={false}
            placeholder={placeholder}
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={[styles.searchContainer]}
            clearButtonMode="never"
          />
          {image && <ProfilePictureFAB image={image} style={styles.img} />}
        </View>
      </AppTouchableOpacity>
    </>
  );
}
////////////////////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primaryWhite,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    elevation: 1,
  },

  searchContainer: {
    shadowOpacity: 0,
    elevation: 0,
    borderRadius: 0,
    flex: 1,
  },

  img: {
    marginRight: 12,
  },
});

export default CESearchBar;
