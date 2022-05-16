import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
///////////////////////////////////////////////////////////////////////
import AppColors from "../../Config/AppColors";
import AppFABButton from "../AppComponents/AppFABButton";
import AppText from "../AppComponents/AppText";
import AppTouchableHighlight from "../AppComponents/AppTouchableHighlight";
import ProfilePictureFAB from "../Others/ProfilePictureFAB";
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
        <AppTouchableHighlight onPress={onMoreIconPress}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={[styles.modalContainer]}></View>
          </Modal>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <AppFABButton name="more-vert" style={styles.moreIcon} />
          </Pressable>
        </AppTouchableHighlight>
        {/* //////////////////////////////////////////// */}
      </View>
    </>
  );
}
{
  /* <AppFABButton name="more-vert" style={styles.moreIcon} /> */
}

///////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
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
