import React from "react";
import { TouchableHighlight } from "react-native";

import AppColors from "../../Config/AppColors";

function AppTouchableHighlight({ children, onPress, style, ...props }) {
  return (
    <>
      <TouchableHighlight
        onPress={onPress}
        style={style}
        underlayColor={AppColors.secondaryBlack}
        {...props}
      >
        <>{children}</>
      </TouchableHighlight>
    </>
  );
}

export default AppTouchableHighlight;
