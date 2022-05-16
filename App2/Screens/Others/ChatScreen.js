////////////////// main: Chat Screen //////////////////////
// note: External
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, View } from "react-native";

// note: Custom Build Components
import AppColors from "../../Config/AppColors";
import ChatScreenHeader from "../../Components/Others/ChatScreenHeader";
import ChatWindowScreen from "../Others/ChatWindowScreen";

////////////////// main: Component //////////////////////
const App = ({ style, modalStyle }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={[styles.centeredView, style]}>
      <Modal
        animationType="slide"
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
        transparent={true}
        visible={modalVisible}
      >
        <View style={[styles.modalView, modalStyle]}>
          <ChatScreenHeader
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />

          <View style={styles.chatBox}>
            <ChatWindowScreen />
          </View>
        </View>
      </Modal>

      <ChatScreenHeader
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

////////////////// main: CSS //////////////////////
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: 22,
  },

  chatBox: {
    width: "100%",
    height: "50%",
  },

  chevronUp: {
    backgroundColor: AppColors.fifthBlack,
    width: "100%",
    textAlign: "center",
    borderRadius: 0,
    padding: 0,
    color: AppColors.fourthBlack,
  },

  headerContainer: {
    width: "100%",
  },

  icon: {
    backgroundColor: "transparent",
    color: "white",
  },

  options: {
    backgroundColor: AppColors.fifthBlack,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 20,
  },

  optionsStyle: {
    borderRadius: 100,
  },
});

export default App;
