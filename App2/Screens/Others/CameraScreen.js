import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Camera, CameraType } from "expo-camera";
//sub: App Component
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppColors from "../../Config/AppColors";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppText from "../../Components/AppComponents/AppText";
import AppFABButtonSecond from "../../Components/AppComponents/AppFABButtonSecond";
//sub: Extra
const { width, height } = Dimensions.get("screen");

function CameraScreen({ navigation }) {
  //:: Flash Light
  const [flashLight, setFlashLight] = useState(false);
  //:: Open Camera
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const onCancelButtonPress = () => {
    console.log("on Cancel Button Press");
    // navigation.goBack();
  };

  return (
    <>
      <View style={[styles.screen]}>
        <Camera style={[styles.camera]} type={type} autoFocus={true}>
          <View style={[styles.optionsContainer]}>
            <AppFABButtonSecond
              icon={
                flashLight
                  ? require("../../Assets/flash.png")
                  : require("../../Assets/no-flash.png")
              }
              onPress={() => !flashLight}
            />

            <AppFABButtonSecond
              icon={require("../../Assets/new-moon.png")}
              iconStyle={{ width: "90%", height: "90%" }}
              backgroundColor={AppColors.primaryWhite}
            />

            <AppFABButtonSecond icon={require("../../Assets/rotate.png")} />
          </View>
          <AppFABButtonSecond
            icon={require("../../Assets/close.png")}
            size={0.1}
            iconContainerStyle={[styles.iconContainerStyle]}
            onPress={onCancelButtonPress}
          />
        </Camera>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cameraContainer: {
    marginTop: 50,
  },

  camera: {
    backgroundColor: "green",
    width: width,
    height: height,
  },

  clickIcon: {
    backgroundColor: "pink",
  },

  iconContainerStyle: {
    backgroundColor: "green",
    position: "absolute",
    right: width * 0.1,
    top: width * 0.1,
  },

  optionsContainer: {
    marginTop: 12,
    backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: width * 0.25,
    width: "100%",
  },

  screen: {
    backgroundColor: "red",
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    backgroundColor: "pink",
    marginTop: 12,
  },
});
export default CameraScreen;
