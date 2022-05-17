import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Modal, Portal, Text, Button, Provider } from "react-native-paper";
///////////////////////////////////////////////////////////////////////
import AppColors from "../../Config/AppColors";
import AppFABButton from "../AppComponents/AppFABButton";
import AppText from "../AppComponents/AppText";
import AppTouchableHighlight from "../AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../AppComponents/AppTouchableOpacity";
import ProfilePictureFAB from "../Others/ProfilePictureFAB";
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
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
  },
];
///////////////////////////////////////////////////////////////////////

function ProfileScreenHeader({}) {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const modalContainerStyle = { backgroundColor: "white", padding: 20 };

  const onBackButtonPress = () => {
    console.log("On Back Button Press");
  };

  const onMoreIconPress = () => {
    console.log("On More Icon Press");
    showModal();
  };

  return (
    <>
      {/* sub: Header  */}
      <View style={styles.headerContainer}>
        <AppTouchableHighlight onPress={onBackButtonPress}>
          <AppFABButton
            name="arrow-back"
            style={{ backgroundColor: "transparent" }}
          />
        </AppTouchableHighlight>

        <AppTouchableHighlight onPress={onMoreIconPress}>
          <AppFABButton name="more-vert" style={styles.moreIcon} />
        </AppTouchableHighlight>
      </View>
      {/* //////////////////////////////// */}
      <Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={styles.modalContainerStyle}
          >
            {modalOptions.map((item) => (
              <AppTouchableHighlight
                style={[styles.optionContainer]}
                onPress={() => console.log("onPress")}
              >
                <Image source={item.icon} style={[styles.modalIconStyle]} />
                <AppText style={[styles.optionText]}>{item.title}</AppText>
              </AppTouchableHighlight>
            ))}
          </Modal>
        </Portal>
      </Provider>
      {/* //////////////////////////////// */}
    </>
  );
}
////////////////////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: AppColors.primaryWhite,
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  modalContainerStyle: {
    backgroundColor: "red",
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 14,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
  },

  modalIconStyle: {
    // backgroundColor: "green",
    width: 32,
    height: 32,
  },

  optionContainer: {
    // backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 14,
  },

  optionText: {
    // backgroundColor: "pink",
    fontSize: 18,
    fontFamily: "SemiBold",
    paddingHorizontal: 12,
  },
});
export default ProfileScreenHeader;
