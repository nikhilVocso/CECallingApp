import React, { useState, useEffect } from "react";
import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { TextInput } from "react-native-paper";
import { Modal, Portal, Text, Button, Provider } from "react-native-paper";
//:; sub: App Component
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppColors from "../../Config/AppColors";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppText from "../../Components/AppComponents/AppText";
import AppFABButtonSecond from "../../Components/AppComponents/AppFABButtonSecond";
import AppNavBar from "../../Components/AppComponents/AppNavBar";
import AppComponentHorizontalSeparator from "../../Components/AppComponents/AppComponentHorizontalSeparator";
//:: sub: Extra
const { width, height } = Dimensions.get("screen");

function ProfileDetailsScreen({ navigation }) {
  const [visible, setVisible] = React.useState(false);
  //:: Gallery Image Picker
  const [image, setImage] = useState(null);
  //:: Text Input
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [about, setAbout] = React.useState("");
  const [website, setWebsite] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  //:: Modal
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  //:: Gallery Image Picker
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const onProfilePicturePress = () => {
    image &&
      Alert.alert("Alert", "Do you want to remove profile picture ?", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => setImage(null) },
      ]);
  };

  const onCameraPress = () => {
    console.log("on camera");
    navigation.navigate("CameraScreen");
  };

  const onGalleryPress = () => {
    console.log("on Gallery");
    pickImage() && hideModal();
  };

  const onCancelPress = () => {
    console.log("on cancel press");
    hideModal();
  };

  const onCloseButtonPress = () => {
    console.log("nikhil");
    navigation.goBack();
  };

  const onDoneButtonPress = () => {
    console.log("done");

    Alert.alert("Your Profile Is Updated", "", [
      { text: "OK", onPress: () => navigation.goBack() },
    ]);
  };

  return (
    <>
      <AppScreen style={[styles.screen]}>
        <View style={[styles.container]}>
          {/* //:: navbar  */}
          <View style={[styles.navbarContainer]}>
            <AppFABButtonSecond
              icon={require("../../Assets/close.png")}
              size={0.1}
              backgroundColor="transparent"
              onPress={onCloseButtonPress}
            />
            <AppText style={[styles.text, { fontSize: 18 }]}>
              Edit profile
            </AppText>
            <AppFABButtonSecond
              icon={require("../../Assets/tick.png")}
              size={0.1}
              backgroundColor="transparent"
              onPress={onDoneButtonPress}
            />
          </View>
          <ScrollView style={[styles.scrollContainer]}>
            {/* //:: Profile Picture Picker  */}
            <View style={[styles.profilePicturePickerContainer]}>
              <AppTouchableOpacity
                style={[styles.profilePictureContainer]}
                onPress={onProfilePicturePress}
              >
                {image && (
                  <Image
                    source={{ uri: image }}
                    style={styles.profilePicture}
                    resizeMode="contain"
                  />
                )}
                {!image && (
                  <Image
                    source={require("../../Assets/user.png")}
                    style={[styles.profilePicture, { opacity: 0.5 }]}
                    resizeMode="contain"
                  />
                )}
              </AppTouchableOpacity>
              <AppFABButtonSecond
                onPress={showModal}
                icon={require("../../Assets/add-photo.png")}
                backgroundColor={AppColors.primaryWhite}
                size={0.08}
                iconContainerStyle={[styles.cameraIcon]}
                iconStyle={{
                  width: "60%",
                  height: "60%",
                }}
              />
            </View>
            {/* //:: Name  */}
            <TextInput
              activeUnderlineColor={AppColors.primaryBlack}
              label="Name"
              onChangeText={(name) => setName(name)}
              style={[styles.textInput]}
              value={name}
              right={<TextInput.Affix text="/100" />}
            />
            {/* //:: Username  */}
            <TextInput
              activeUnderlineColor={AppColors.primaryBlack}
              label="Username"
              onChangeText={(username) => setUsername(username)}
              style={[styles.textInput]}
              value={username}
              right={<TextInput.Affix text="/100" />}
            />
            {/* //:: About  */}
            <TextInput
              activeUnderlineColor={AppColors.primaryBlack}
              label="About"
              onChangeText={(about) => setAbout(about)}
              style={[styles.textInput]}
              value={about}
              right={<TextInput.Affix text="/100" />}
            />
            {/* //:: Website  */}
            <TextInput
              activeUnderlineColor={AppColors.primaryBlack}
              label="Website"
              onChangeText={(website) => setWebsite(website)}
              style={[styles.textInput]}
              value={website}
              right={<TextInput.Affix text="/100" />}
            />
            {/* //:: Update Email  */}
            <TextInput
              activeUnderlineColor={AppColors.primaryBlack}
              label="Update your email address"
              onChangeText={(email) => setEmail(email)}
              style={[styles.textInput]}
              value={email}
              right={<TextInput.Affix text="/100" />}
            />
            {/* //:: Update Phone Number  */}
            <TextInput
              activeUnderlineColor={AppColors.primaryBlack}
              label="Update your mobile number"
              onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
              style={[styles.textInput]}
              value={phoneNumber}
              right={<TextInput.Affix text="/100" />}
            />
          </ScrollView>
          {/* //:: Modal  */}
          <Provider>
            <Portal>
              <Modal
                visible={visible}
                onDismiss={hideModal}
                contentContainerStyle={styles.modalContainerStyle}
              >
                <AppText
                  style={[
                    styles.text,
                    {
                      padding: width * 0.05,
                      width: "100%",
                      textAlign: "center",
                    },
                  ]}
                >
                  Select an image
                </AppText>
                <AppComponentHorizontalSeparator />
                <AppTouchableHighlight
                  style={[styles.selectOptionContainer]}
                  onPress={onCameraPress}
                >
                  <Image
                    source={require("../../Assets/camera2.png")}
                    style={{
                      width: width * 0.065,
                      height: width * 0.065,
                      marginHorizontal: width * 0.02,
                    }}
                  />

                  <AppText
                    style={[
                      styles.text,
                      { paddingVertical: width * 0.03, paddingHorizontal: 0 },
                    ]}
                  >
                    Camera
                  </AppText>
                </AppTouchableHighlight>
                <AppTouchableHighlight
                  style={[styles.selectOptionContainer]}
                  onPress={onGalleryPress}
                >
                  <Image
                    source={require("../../Assets/imageGallery.png")}
                    style={{
                      width: width * 0.065,
                      height: width * 0.065,
                      marginHorizontal: width * 0.02,
                    }}
                  />
                  <AppText
                    style={[
                      styles.text,
                      { paddingVertical: width * 0.03, paddingHorizontal: 0 },
                    ]}
                  >
                    Gallery
                  </AppText>
                </AppTouchableHighlight>
                <AppComponentHorizontalSeparator />
                <AppText
                  style={[
                    styles.text,
                    {
                      padding: width * 0.05,
                      width: "100%",
                      textAlign: "center",
                    },
                  ]}
                  onPress={onCancelPress}
                >
                  Cancel
                </AppText>
              </Modal>
            </Portal>
          </Provider>
          {/* //:: Modal  */}
        </View>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  selectOptionContainer: {
    // backgroundColor: "yellow",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingVertical: width * 0.02,
  },

  cameraIcon: {
    borderWidth: 0.1,
    position: "absolute",
    right: width * 0.02,
    bottom: width * 0.02,
    borderWidth: 0.1,
    elevation: 10,
  },

  container: {
    // backgroundColor: "green",
    // paddingHorizontal: width * 0.04,
    flex: 1,
    width: "100%",
  },

  modalContainerStyle: {
    backgroundColor: AppColors.primaryWhite,
    marginHorizontal: width * 0.1,
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 15,
    elevation: 10,
    overflow: "hidden",
  },

  navbarContainer: {
    backgroundColor: AppColors.primaryWhite,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: width * 0.04,
    elevation: 5,
  },

  profilePicturePickerContainer: {
    // backgroundColor: "yellow",
    alignItems: "center",
    paddingTop: width * 0.05,
    alignSelf: "center",
  },

  profilePictureContainer: {
    // backgroundColor: "orange",
    backgroundColor: AppColors.primaryWhite,
    width: width * 0.35,
    height: width * 0.35,
    borderRadius: 100,
    overflow: "hidden",
    borderWidth: 0.1,
  },

  profilePicture: {
    // backgroundColor: "orange",
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },

  screen: {
    // backgroundColor: "red",
    backgroundColor: AppColors.primaryWhite,
    flex: 1,
    width: width,
  },

  scrollContainer: {
    // backgroundColor: "orange",
    width: "100%",
    height: "100%",
    paddingHorizontal: width * 0.04,
  },

  text: {
    // backgroundColor: "pink",
    padding: width * 0.03,
    color: "black",
    fontFamily: "SemiBold",
    fontSize: 16,
  },

  textInput: {
    backgroundColor: AppColors.primaryWhite,
    marginVertical: width * 0.02,
    width: "100%",
  },
});
export default ProfileDetailsScreen;
