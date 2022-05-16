import React from "react";
import { TouchableOpacity } from "react-native";

function AppTouchableOpacity({ children, onPress, style }) {
  return (
    <>
      <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={style}>
        {children}
      </TouchableOpacity>
    </>
  );
}

export default AppTouchableOpacity;
