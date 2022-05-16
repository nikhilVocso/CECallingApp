import React from "react";
import { View, StyleSheet, Alert } from "react-native";
////////////////////////////////////////////////////////////////////////////////
import AppColors from "../../Config/AppColors";
import AppFABButton from "../AppComponents/AppFABButton";
import AppText from "../AppComponents/AppText";
import AppTouchableHighlight from "../AppComponents/AppTouchableHighlight";
////////////////////////////////////////////////////////////////////////////////

function UserDetailsContainer({
  city,
  name,
  profile,
  style,
  verify,
  username = "nikhilmenan",
  onUserNamePress,
}) {
  return (
    <>
      <View style={[styles.container, style]}>
        {/* ///////////////////////////////////// */}
        <AppTouchableHighlight
          style={styles.userNameContainer}
          onPress={onUserNamePress}
        >
          <AppText style={styles.nameText} styles={styles.name}>
            {name}
          </AppText>
          {verify && (
            <AppFABButton
              color={AppColors.primaryBlack}
              name="check-circle"
              size={20}
              style={styles.icon}
            />
          )}
        </AppTouchableHighlight>
        {/* //////////////////////////////////////// */}
        <View style={styles.profileCityContainer}>
          {profile || city ? (
            <>
              <AppText style={styles.text}>{profile}</AppText>
              <AppFABButton
                color={AppColors.primaryBlack}
                name="circle"
                size={6}
                style={styles.dotIcon}
              />
              <AppText style={styles.text}>{city}</AppText>
            </>
          ) : (
            <AppText style={[styles.text, { textTransform: "lowercase" }]}>
              {"@" + username}
            </AppText>
          )}
        </View>
      </View>
    </>
  );
}
////////////////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primaryWhite,
    // width: "100%",
  },

  userNameContainer: {
    alignItems: "center",
    flexDirection: "row",
  },

  nameText: {
    fontFamily: "SemiBold",
    fontSize: 20,
    textTransform: "capitalize",
  },

  icon: {
    backgroundColor: "transparent",
    marginLeft: 8,
    padding: 0,
  },

  profileCityContainer: {
    alignItems: "center",
    flexDirection: "row",
  },

  dotIcon: {
    backgroundColor: "transparent",
    padding: 0,
    paddingHorizontal: 8,
  },

  text: {
    fontFamily: "SemiBold",
    fontSize: 12,
    textTransform: "capitalize",
  },
});
export default UserDetailsContainer;
