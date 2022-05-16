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
const modalOptions = [
  {
    icon: require("../../Assets/instagram.png"),
    title: "nikhil menan",
    subTitle: "this is subtitle",
  },
  {
    icon: require("../../Assets/instagram.png"),
    title: "nikhil menan",
    subTitle: "this is subtitle",
  },
];
///////////////////////////////////////////////////////////////////////

function FeedHeader({
  onHeaderDetailsContainer,
  onHeaderPictureContainer,
  onMoreIconPress,
  profileName,
  profilePicture,
  postingTime,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View style={styles.header}>
        <AppTouchableHighlight
          onPress={onHeaderPictureContainer}
          style={styles.headerPictureContainer}
        >
          <ProfilePictureFAB image={profilePicture} />
        </AppTouchableHighlight>

        <AppTouchableHighlight
          onPress={onHeaderDetailsContainer}
          style={styles.headerDetailsContainer}
        >
          <>
            <AppText numberOfLines={1} style={styles.profileName}>
              {profileName}
            </AppText>
            <AppText numberOfLines={1} style={styles.postingTime}>
              {postingTime}
            </AppText>
          </>
        </AppTouchableHighlight>
        {/* //////////////////////////////////////////// */}
        {/* //////////////////////////////////////////// */}

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
            {/* main:currently working  */}
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
                      <AppText style={[styles.modalOptionSubtitle]}>
                        {item.subTitle}
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

        {/* //////////////////////////////////////////// */}
        {/* //////////////////////////////////////////// */}
      </View>
    </>
  );
}

///////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  //////////////////////
  modalContainer: {
    backgroundColor: "green",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },

  modalCloseIcon: {
    alignSelf: "flex-end",
  },

  modalOptionIcon: {
    backgroundColor: "red",
    width: 32,
    height: 32,
  },

  modalOptionContainer: {
    backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 12,
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
  //////////////////////

  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  headerPictureContainer: {
    padding: 10,
  },

  headerDetailsContainer: {
    paddingVertical: 10,
    flex: 1,
  },

  profileName: {
    fontFamily: "Bold",
    textTransform: "capitalize",
  },

  postingTime: {
    fontFamily: "Medium",
    textTransform: "capitalize",
  },

  moreIcon: {
    backgroundColor: "transparent",
    padding: 15,
  },
});

export default FeedHeader;
