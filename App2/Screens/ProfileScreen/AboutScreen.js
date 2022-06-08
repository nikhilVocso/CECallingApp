import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
//:: sub: App Component
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppColors from "../../Config/AppColors";
import AppText from "../../Components/AppComponents/AppText";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppComponentHorizontalSeparator from "../../Components/AppComponents/AppComponentHorizontalSeparator";

const { width, height } = Dimensions.get("screen");

function AboutScreen({
  about = "An Entrepreneur, Techie and Digital Marketer! As a Digital Marketer, for over 12 years, I have enjoyed helping businesses and startups around the globe across different industries, plan, design, build, market and scale up their businesses and digital assets(Web, mobile and integrated) online.",
  expertise = [
    "Music",
    "GST",
    "Programming",
    "Music",
    "GST",
    "Programming",
    "Music",
    "GST",
    "Programming",
    "Music",
    "GST",
    "Programming",
  ],
  website = "www.nikhilmenan.com",
}) {
  return (
    <>
      <View style={[styles.container]}>
        {/* //sub:: Title  */}
        <View style={{ marginVertical: 6 }}>
          <AppText style={[styles.title]}>About</AppText>
          {/* //sub:: About  */}
          <AppText style={[styles.text]}>{about}</AppText>
        </View>

        <View style={{ marginVertical: 6 }}>
          <AppText style={[styles.title]}>experties</AppText>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {expertise.map((item) => (
              <AppText style={[styles.text]}>{item}, </AppText>
            ))}
          </View>
        </View>

        {website && (
          <View style={{ marginVertical: 6 }}>
            {/* //:: Website  */}
            <AppText style={[styles.title]}>website (for more details)</AppText>
            <AppText
              style={[
                styles.text,
                {
                  fontFamily: "SemiBold",
                  textDecorationLine: "underline",
                  color: AppColors.secondaryBlack,
                },
              ]}
            >
              {website}
            </AppText>
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "green",
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    width: "100%",
    padding: width * 0.03,
  },

  // screen: {
  //   backgroundColor: "red",
  //   backgroundColor: AppColors.primaryWhite,
  //   flex: 1,
  // },

  title: {
    // backgroundColor: "yellow",
    // borderBottomWidth: width * 0.005,
    // marginVertical: 12,
    fontSize: 16,
    fontFamily: "SemiBold",
    textTransform: "capitalize",
    marginBottom: 4,
    alignSelf: "flex-start",
  },

  text: {
    // backgroundColor: "pink",
    fontSize: 14,
    fontFamily: "Medium",
    marginBottom: 12,
  },
});
export default AboutScreen;
