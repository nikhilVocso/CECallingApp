import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
//////////////////////////////////////////////////////////////////////////////
import AppColors from "../../Config/AppColors";
import AppText from "../AppComponents/AppText";
import AppTouchableOpacity from "../AppComponents/AppTouchableOpacity";
//////////////////////////////////////////////////////////////////////////////

function FeedContent({
  webSite = "www.example.com",
  bio = "This is Bio",
  bioTextStyles,
  onWebSitePress,
  webSiteTextStyles,
}) {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <View style={styles.container}>
        {bio ? (
          <AppText style={[styles.bio, bioTextStyles]} numberOfLines={8}>
            {bio.length > 120 ? (
              showMore ? (
                <>
                  <AppText style={[styles.bio, bioTextStyles]}>
                    {bio + " "}
                  </AppText>
                  <AppText
                    onPress={() => setShowMore(!showMore)}
                    style={styles.showText}
                  >
                    See less
                  </AppText>
                </>
              ) : (
                <>
                  <AppText style={[styles.bio, bioTextStyles]}>{`${bio.slice(
                    0,
                    120
                  )}...`}</AppText>
                  <AppText
                    onPress={() => setShowMore(!showMore)}
                    style={styles.showText}
                  >
                    See more
                  </AppText>
                </>
              )
            ) : (
              <AppText style={[styles.bio, bioTextStyles]}>
                {bio + "..."}
              </AppText>
            )}
          </AppText>
        ) : null}

        {webSite && (
          <AppTouchableOpacity style={styles.webSite} onPress={onWebSitePress}>
            <AppText style={[styles.webSite, webSiteTextStyles]}>
              {"www." + webSite}
            </AppText>
          </AppTouchableOpacity>
        )}
      </View>
    </>
  );
}

//////////////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  bio: {
    fontSize: 14,
    fontFamily: "SemiBold",
  },

  showText: {
    fontSize: 14,
    fontFamily: "SemiBold",
    textDecorationLine: "underline",
    color: AppColors.secondaryBlack,
  },

  webSite: {
    fontSize: 14,
    fontFamily: "SemiBold",
    textDecorationLine: "underline",
    color: AppColors.secondaryBlack,
  },
});

export default FeedContent;
