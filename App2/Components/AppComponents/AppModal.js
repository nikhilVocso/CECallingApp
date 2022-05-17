import React from "react";
import { Dimensions, Image, View, StyleSheet } from "react-native";
/////////////////////////////////////////////////////////////////////
import AppColors from "../../Config/AppColors";
import AppScreen from "./AppScreen";
import AppText from "../AppComponents/AppText";
import AppButton from "./AppButton";
import AppTouchableHighlight from "./AppTouchableHighlight";
import AppTouchableOpacity from "./AppTouchableOpacity";
import AppFABButton from "./AppFABButton";
/////////////////////////////////////////////////////////////////////
const { width, height } = Dimensions.get("screen");
const modalOptions = [
  {
    icon: require("../../Assets/setting.png"),
    title: "Settings",
  },
  {
    icon: require("../../Assets/archive.png"),
    title: "Archive",
  },
  {
    icon: require("../../Assets/activity.png"),
    title: "Your Activity",
  },
  {
    icon: require("../../Assets/qrCode.png"),
    title: "QR Code",
  },
  {
    icon: require("../../Assets/save.png"),
    title: "Save",
  },
  {
    icon: require("../../Assets/favorite.png"),
    title: "Favorites",
    subTitle: "this is subtitle",
  },
];
/////////////////////////////////////////////////////////////////////

function AppModal({
  modalContainerStyle,
  optionTextStyle,
  optionSubtitleStyle,
  showModal = true,
}) {
  return (
    <>
      <AppScreen style={[styles.screen]}>
        {showModal && (
          <View style={{ backgroundColor: "rgba(0,0,0,0.3)", flex: 1 }}>
            <View style={[styles.modalContainer, modalContainerStyle]}>
              {modalOptions.map((item) => (
                <AppTouchableHighlight style={[styles.optionContainer]}>
                  <Image source={item.icon} style={[styles.icon]} />
                  <View>
                    <AppText style={[styles.optionText, optionTextStyle]}>
                      {item.title}
                    </AppText>
                    {item.subTitle && (
                      <AppText
                        style={[styles.optionSubtitle, optionSubtitleStyle]}
                      >
                        {item.subTitle}
                      </AppText>
                    )}
                  </View>
                </AppTouchableHighlight>
              ))}
            </View>
          </View>
        )}
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    backgroundColor: "green",
    width: 32,
    height: 32,
  },

  modalContainer: {
    backgroundColor: "yellow",
    width: "100%",
    position: "absolute",
    bottom: 0,
    padding: 14,
  },

  optionContainer: {
    backgroundColor: "orange",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 14,
  },

  optionText: {
    backgroundColor: "pink",
    fontSize: 18,
    fontFamily: "SemiBold",
  },

  optionSubtitle: {
    backgroundColor: "yellow",
    fontSize: 14,
    fontFamily: "Medium",
  },

  screen: {
    backgroundColor: "red",
    flex: 1,
  },
});
export default AppModal;
