import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Modal, Portal, Text, Button, Provider } from "react-native-paper";
/////////////////////////////////////////////////////////////////////////////////
import AppTextInput from "../Components/AppComponents/AppTextInput";
import AppText from "../Components/AppComponents/AppText";
import AppTouchableOpacity from "../Components/AppComponents/AppTouchableOpacity";
import AppTouchableHighlight from "../Components/AppComponents/AppTouchableHighlight";
import AppColors from "../Config/AppColors";
import AppButton from "../Components/AppComponents/AppBigButton";
import AppScreen from "../Components/AppComponents/AppScreen";
import AppFABButton from "../Components/AppComponents/AppFABButton";
/////////////////////////////////////////////////////////////////////////////////
const modalOptions = [
  {
    icon: require("../Assets/setting.png"),
    title: "Settings",
  },
  {
    icon: require("../Assets/archive.png"),
    title: "Archive",
  },
  {
    icon: require("../Assets/activity.png"),
    title: "Your Activity",
  },
  {
    icon: require("../Assets/qrCode.png"),
    title: "QR Code",
  },
  {
    icon: require("../Assets/save.png"),
    title: "Save",
  },
  {
    icon: require("../Assets/favorite.png"),
    title: "Favorites",
  },
];
/////////////////////////////////////////////////////////////////////////////////

function Rough({}) {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <>
      <AppScreen style={[styles.screen]}>
        <Provider>
          <Portal>
            <Modal
              visible={visible}
              onDismiss={hideModal}
              contentContainerStyle={containerStyle}
            >
              <View style={[styles.modalContainer]}>
                <View style={{ flex: 1 }}>
                  {modalOptions.map((item) => (
                    <AppTouchableHighlight
                      style={[styles.modalOptionContainer]}
                      onPress={() => console.log("On Press")}
                    >
                      <Image
                        source={item.icon}
                        style={[styles.modalOptionIcon]}
                      />
                      <View style={{ marginHorizontal: 12 }}>
                        <AppText style={[styles.modalOptionTitle]}>
                          {item.title}
                        </AppText>
                      </View>
                    </AppTouchableHighlight>
                  ))}
                </View>
                <View>
                  <AppFABButton
                    name="close"
                    style={styles.modalCloseIcon}
                    onPress={() => setModalVisible(!modalVisible)}
                  />
                </View>
              </View>
            </Modal>
          </Portal>
          <Button style={{ marginTop: 30 }} onPress={showModal}>
            Show
          </Button>
        </Provider>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  //////////////////////
  modalContainer: {
    backgroundColor: AppColors.secondaryWhite,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 14,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },

  modalCloseIcon: {
    alignSelf: "flex-end",
  },

  modalOptionIcon: {
    width: 32,
    height: 32,
  },

  modalOptionContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 16,
  },

  modalOptionTitle: {
    fontSize: 18,
    fontFamily: "SemiBold",
    textTransform: "capitalize",
  },

  modalOptionSubtitle: {
    fontSize: 14,
    fontFamily: "Medium",
    textTransform: "capitalize",
  },

  moreIcon: {
    backgroundColor: "transparent",
    padding: 15,
  },
  //////////////////////

  screen: {
    backgroundColor: "red",
    flex: 1,
  },
});
export default Rough;
