import React from "react";
import { StyleSheet, TextInput } from "react-native";

function AppTextInput({
  children,
  placeholder = "Enter Your Text Here",
  ...othersProps
}) {
  return (
    <>
      <TextInput placeholder={placeholder} {...othersProps}>
        <>{children}</>
      </TextInput>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default AppTextInput;
