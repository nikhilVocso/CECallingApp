//////////////////// main: Chat Screen Header //////////////////////
// note: External
import React, { useState } from "react";
import { StyleSheet, Pressable, View } from "react-native";

// note: Custom Build Component
import AppColors from "../../Config/AppColors";
import AppFABButton from "../AppComponents/AppFABButton";
import AppTouchableHighlight from "../AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../AppComponents/AppTouchableOpacity";
import ComponentSeparator from "../AppComponents/AppComponentHorizontalSeparator";

//////////////////// main: Chat Screen Header //////////////////////
function ChatScreenHeader({ modalVisible, setModalVisible }) {
  const [mic, SetMic] = useState(true);
  const [videoCall, setVideoCall] = useState(true);

  return (
    <>
      <View style={styles.container}>
        <Pressable style={styles.headerContainer}>
          {/* /////////// */}
          <AppFABButton
            name={modalVisible ? "arrow-drop-down" : "arrow-drop-up"}
            onPress={() => setModalVisible(!modalVisible)}
            size={32}
            style={styles.chevronUp}
          />
          <View style={styles.options}>
            {/* /////////// */}
            <AppTouchableHighlight
              onPress={() => console.log("Mic")}
              style={styles.optionsStyle}
            >
              <AppFABButton
                name="chat-bubble"
                onPress={() => setModalVisible(!modalVisible)}
                size={32}
                style={styles.icon}
              />
            </AppTouchableHighlight>

            {/* /////////// */}
            <AppTouchableHighlight
              onPress={() => {
                console.log("Mic");
                SetMic(!mic);
              }}
              style={styles.optionsStyle}
            >
              <AppFABButton
                name={mic ? "mic" : "mic-off"}
                size={32}
                style={styles.icon}
              />
            </AppTouchableHighlight>

            {/* /////////// */}
            <AppTouchableHighlight
              onPress={() => {
                console.log("Video");
                setVideoCall(!videoCall);
              }}
              style={styles.optionsStyle}
            >
              <AppFABButton
                name={videoCall ? "videocam" : "videocam-off"}
                size={32}
                style={styles.icon}
              />
            </AppTouchableHighlight>

            {/* /////////// */}
            <AppTouchableOpacity onPress={() => console.log("Call")}>
              <AppFABButton
                name="call"
                size={32}
                style={[styles.icon, { backgroundColor: "red" }]}
              />
            </AppTouchableOpacity>
          </View>
        </Pressable>
      </View>
      <ComponentSeparator />
    </>
  );
}

//////////////////// main: CSS //////////////////////
const styles = StyleSheet.create({
  chevronUp: {
    backgroundColor: AppColors.fifthBlack,
    borderRadius: 0,
    color: AppColors.fourthBlack,
    padding: 0,
    textAlign: "center",
    width: "100%",
  },

  container: {
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  headerContainer: {
    width: "100%",
  },

  icon: {
    backgroundColor: "transparent",
    color: "white",
  },

  options: {
    alignItems: "center",
    backgroundColor: AppColors.fifthBlack,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 20,
  },

  optionsStyle: {
    borderRadius: 100,
  },
});
export default ChatScreenHeader;
