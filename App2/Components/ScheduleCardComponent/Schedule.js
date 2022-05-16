import React, { useState } from "react";
import { Button, View, StyleSheet, FlatList } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
//////////////////////////////////////////////////////////////////////////////////////////////
import AppFABButton from "../AppComponents/AppFABButton";
import AppText from "../AppComponents/AppText";
import AppTouchableHighlight from "../AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../AppComponents/AppTouchableOpacity";
//////////////////////////////////////////////////////////////////////////////////////////////

function Schedule({ scheduleData }) {
  const [isFromPickerVisible, setFromPickerVisibility] = useState(false);
  const [isToPickerVisible, setToPickerVisibility] = useState(false);

  //////// sub: From /////////
  const showFromPicker = () => {
    setFromPickerVisibility(true);
  };

  const hideFromPicker = () => {
    setFromPickerVisibility(false);
  };

  const handleFromConfirm = (time) => {
    hideFromPicker();

    const hours =
      time.getHours() < 10 ? "0" + time.getHours() : time.getHours();

    const minutes =
      time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();

    scheduleData.from = hours + ":" + minutes;
  };
  //////// sub: From /////////

  ///////// sub: To //////////
  const showToPicker = () => {
    setToPickerVisibility(true);
  };

  const hideToPicker = () => {
    setToPickerVisibility(false);
  };

  const handleToConfirm = (time) => {
    hideToPicker();

    const hours =
      time.getHours() < 10 ? "0" + time.getHours() : time.getHours();

    const minutes =
      time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();

    scheduleData.to = hours + ":" + minutes;
  };
  ///////// sub: To //////////

  const onCloseButtonPress = (item) => {
    console.log("on close button press");
    // scheduleData.filter((item) => item.id === id.id);
    // console.log(item.id);
    delete scheduleData[item.id - 1];
    console.log(scheduleData);
  };

  const onDoneButtonPress = () => {
    console.log("on done button press");
  };

  const onAddHoursButtonPress = () => {
    console.log("on add hours button press");
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={scheduleData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <>
              <View style={styles.scheduleContainer}>
                {/* //////// sub: From /////// */}
                <View style={styles.textContainer}>
                  <AppText style={[styles.text]} onPress={showFromPicker}>
                    {item.from}
                  </AppText>
                  <DateTimePickerModal
                    isVisible={isFromPickerVisible}
                    mode="time"
                    onConfirm={handleFromConfirm}
                    onCancel={hideFromPicker}
                  />
                </View>
                {/* //////// sub: From /////// */}

                <AppText style={[styles.text]}>-</AppText>

                {/* //////// sub: To /////// */}
                <View style={styles.textContainer}>
                  <AppText style={[styles.text]} onPress={showToPicker}>
                    {item.to}
                  </AppText>
                  <DateTimePickerModal
                    isVisible={isToPickerVisible}
                    mode="time"
                    onConfirm={handleToConfirm}
                    onCancel={hideToPicker}
                  />
                </View>
                {/* //////// sub: To /////// */}

                <AppTouchableHighlight onPress={() => onCloseButtonPress(item)}>
                  <AppFABButton name="close" style={styles.button} />
                </AppTouchableHighlight>

                {/* <AppTouchableHighlight onPress={onDoneButtonPress}>
                  <AppFABButton name="done" style={styles.button} />
                </AppTouchableHighlight> */}
              </View>
            </>
          )}
        />
        <AppTouchableOpacity onPress={onAddHoursButtonPress}>
          <AppText style={styles.addHoursTextStyle}>
            + add a set of hours
          </AppText>
        </AppTouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },

  scheduleContainer: {
    marginBottom: 2,
    backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  textContainer: {
    backgroundColor: "yellow",
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 3,
    paddingVertical: 6,
  },

  text: {
    backgroundColor: "red",
    fontSize: 18,
    fontFamily: "SemiBold",
    textTransform: "uppercase",
  },

  button: {
    backgroundColor: "transparent",
    padding: 8,
  },

  addHoursTextStyle: {
    backgroundColor: "yellow",
    fontSize: 16,
    fontFamily: "SemiBold",
    textTransform: "uppercase",
  },
});
export default Schedule;
