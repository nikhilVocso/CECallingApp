import React from "react";
import { View, StyleSheet } from "react-native";
////////////////////////////////////////////////////////////////////////////////
import AppButton from "../AppComponents/AppButton";
import AppColors from "../../Config/AppColors";
import AppTouchableOpacity from "../AppComponents/AppTouchableOpacity";
////////////////////////////////////////////////////////////////////////////////

function UserCallButtons({
  buttonStyle,
  ContainerStyle,
  onVideoCallButton,
  onAudioCallButton,
  style,
}) {
  return (
    <>
      <View style={[styles.container, style]}>
        <AppTouchableOpacity
          style={[styles.button, { marginRight: 12 }, buttonStyle]}
          onPress={onVideoCallButton}
        >
          <AppButton
            iconName="videocam"
            iconSize={18}
            title="₹ 100/min"
            textStyle={styles.text}
            ContainerStyle={[
              {
                backgroundColor: AppColors.primaryGreen,
                padding: 10,
              },
              ContainerStyle,
            ]}
          />
        </AppTouchableOpacity>
        <AppTouchableOpacity
          style={[styles.button, buttonStyle]}
          onPress={onAudioCallButton}
        >
          <AppButton
            iconName="call"
            iconSize={18}
            title="₹ 70/min"
            textStyle={styles.text}
            ContainerStyle={[
              {
                backgroundColor: AppColors.primaryGreen,
                padding: 10,
              },
              ContainerStyle,
            ]}
          />
        </AppTouchableOpacity>
      </View>
    </>
  );
}

////////////////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primaryWhite,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  button: {
    // marginRight: 12,
  },

  text: {
    fontFamily: "ExtraLight",
    color: AppColors.primaryWhite,
    fontSize: 12,
  },
});
export default UserCallButtons;
