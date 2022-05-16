import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React from "react";
import { Text, StyleSheet } from "react-native";
import {
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic,
} from "@expo-google-fonts/montserrat";

function AppFonts({ children = "This is Text", style, ...otherProps }) {
  let [fontsLoaded, error] = useFonts({
    Thin: Montserrat_100Thin,
    ThinItalic: Montserrat_100Thin_Italic,
    ExtraLight: Montserrat_200ExtraLight,
    ExtraLightItalic: Montserrat_200ExtraLight_Italic,
    Light: Montserrat_300Light,
    LightItalic: Montserrat_300Light_Italic,
    Regular: Montserrat_400Regular,
    RegularItalic: Montserrat_400Regular_Italic,
    Medium: Montserrat_500Medium,
    MediumItalic: Montserrat_500Medium_Italic,
    SemiBold: Montserrat_600SemiBold,
    SemiBoldItalic: Montserrat_600SemiBold_Italic,
    Bold: Montserrat_700Bold,
    BoldItalic: Montserrat_700Bold_Italic,
    ExtraBoldItalic: Montserrat_800ExtraBold,
    ExtraBoldItalic: Montserrat_800ExtraBold_Italic,
    Black: Montserrat_900Black,
    BlackItalic: Montserrat_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Text style={[styles.appText, style]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  appText: {
    fontFamily: "Regular",
  },
});

export default AppFonts;
