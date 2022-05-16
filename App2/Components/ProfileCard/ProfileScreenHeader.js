import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from "react-native";
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
  const [modalVisible, setModalVisible] = useState(false);

  const onBackButtonPress = () => {
    console.log("On Back Button Press");
  };

  const onMoreIconPress = () => {
    console.log("On More Icon Press");
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
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={[styles.modalContainer]}>
              <View>
                {modalOptions.map((item) => (
                  <View style={[styles.modalOptionContainer]}>
                    <Image
                      source={item.icon}
                      style={[styles.modalOptionIcon]}
                    />
                    <View style={{ marginHorizontal: 12 }}>
                      <AppText style={[styles.modalOptionTitle]}>
                        {item.title}
                      </AppText>
                    </View>
                  </View>
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

          <AppTouchableHighlight onPress={() => setModalVisible(true)}>
            <AppFABButton name="more-vert" style={styles.moreIcon} />
          </AppTouchableHighlight>
        </View>
      </View>
    </>
  );
}
////////////////////////////////////////////////////////////////////////////////////

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
    marginVertical: 16,
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

  container: {},

  headerContainer: {
    backgroundColor: AppColors.primaryWhite,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default ProfileScreenHeader;
