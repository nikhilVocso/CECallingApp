import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import AppText from "../../Components/AppComponents/AppText";
import AppColors from "../../Config/AppColors";
import AppTouchableHighlight from "../../Components/AppComponents/AppTouchableHighlight";
import AppTouchableOpacity from "../../Components/AppComponents/AppTouchableOpacity";
import AppTextInput from "../../Components/AppComponents/AppTextInput";
import AppFABButton from "../../Components/AppComponents/AppFABButton";
import AppIcon from "../../Components/AppComponents/AppIcon";
import AppComponentHorizontalSeparator from "../../Components/AppComponents/AppComponentHorizontalSeparator";

////// note: Icons ///////
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

function ChatWindowScreen({}) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.chatWindow}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* ////////// note: Receiver //////////// */}
            <View style={[styles.chatsContainer, styles.receiverChat]}>
              <AppText style={[styles.chats, styles.receiverChat]}>
                receiver
              </AppText>
              <AppText style={[styles.chatsTime, styles.receiverChat]}>
                nikhil saturday 12:00
              </AppText>
            </View>
            {/* /////////////// */}
            <View style={[styles.chatsContainer, styles.receiverChat]}>
              <AppText style={[styles.chats, styles.receiverChat]}>
                This is long text This is long textThis is long textThis is long
                textThis is long textThis is long textThis is long textThis is
                long textThis is long textThis is long textThis is long textThis
                is long textThis is long text
              </AppText>
              <AppText style={[styles.chatsTime, styles.receiverChat]}>
                nikhil saturday 12:00
              </AppText>
            </View>
            <View style={[styles.chatsContainer, styles.receiverChat]}>
              <AppText style={[styles.chats, styles.receiverChat]}>
                receiver
              </AppText>
              <AppText style={[styles.chatsTime, styles.receiverChat]}>
                nikhil saturday 12:00
              </AppText>
            </View>
            <View style={[styles.chatsContainer, styles.receiverChat]}>
              <AppText style={[styles.chats, styles.receiverChat]}>
                receiver
              </AppText>
              <AppText style={[styles.chatsTime, styles.receiverChat]}>
                nikhil saturday 12:00
              </AppText>
            </View>
            <View style={[styles.chatsContainer, styles.receiverChat]}>
              <AppText style={[styles.chats, styles.receiverChat]}>
                receiver
              </AppText>
              <AppText style={[styles.chatsTime, styles.receiverChat]}>
                nikhil saturday 12:00
              </AppText>
            </View>

            {/* //////// note: Sender /////// */}
            <View style={[styles.chatsContainer, styles.senderChat]}>
              <AppText
                style={[
                  styles.chats,
                  styles.senderChat,
                  { backgroundColor: AppColors.SixthBlack },
                ]}
              >
                sender
              </AppText>
              <AppText style={[styles.chatsTime, styles.senderChat]}>
                nikhil saturday 12:00
              </AppText>
            </View>
            {/* ///////////// */}
            <View style={[styles.chatsContainer, styles.senderChat]}>
              <AppText
                style={[
                  styles.chats,
                  styles.senderChat,
                  { backgroundColor: AppColors.SixthBlack },
                ]}
              >
                sender
              </AppText>
              <AppText style={[styles.chatsTime, styles.senderChat]}>
                nikhil saturday 12:00
              </AppText>
            </View>
            <View style={[styles.chatsContainer, styles.senderChat]}>
              <AppText
                style={[
                  styles.chats,
                  styles.senderChat,
                  { backgroundColor: AppColors.SixthBlack },
                ]}
              >
                sender
              </AppText>
              <AppText style={[styles.chatsTime, styles.senderChat]}>
                nikhil saturday 12:00
              </AppText>
            </View>
            <View style={[styles.chatsContainer, styles.senderChat]}>
              <AppText
                style={[
                  styles.chats,
                  styles.senderChat,
                  { backgroundColor: AppColors.SixthBlack },
                ]}
              >
                sender
              </AppText>
              <AppText style={[styles.chatsTime, styles.senderChat]}>
                nikhil saturday 12:00
              </AppText>
            </View>
            <View style={[styles.chatsContainer, styles.senderChat]}>
              <AppText
                style={[
                  styles.chats,
                  styles.senderChat,
                  { backgroundColor: AppColors.SixthBlack },
                ]}
              >
                sender
              </AppText>
              <AppText style={[styles.chatsTime, styles.senderChat]}>
                nikhil saturday 12:00
              </AppText>
            </View>
          </ScrollView>
        </View>

        {/* /////////////////////////////// */}
        <AppComponentHorizontalSeparator />
        <View style={styles.textInputContainer}>
          <AppTextInput
            placeholder="send message..."
            placeholderTextColor="white"
            style={styles.textInputStyle}
            multiline={true}
          />
          <AppTouchableHighlight
            onPress={() => console.log("Attach")}
            style={{ borderRadius: 100 }}
          >
            <Entypo
              name="attachment"
              size={24}
              color={AppColors.primaryWhite}
              style={styles.textInputButton}
            />
          </AppTouchableHighlight>
          <AppTouchableHighlight
            onPress={() => console.log("Send")}
            style={{ borderRadius: 100 }}
          >
            <FontAwesome
              name="send"
              size={24}
              color={AppColors.primaryWhite}
              style={styles.textInputButton}
            />
          </AppTouchableHighlight>
          {/* <AppFABButton name="attach-file" style={styles.textInputButton} /> */}
          {/* <AppFABButton name="send" style={styles.textInputButton} /> */}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.fifthBlack,
    width: "100%",
    height: "100%",
  },

  chatWindow: {
    width: "100%",
    flex: 1,
    paddingHorizontal: 25,
  },

  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
  },

  textInputStyle: {
    paddingVertical: 15,
    flex: 1,
    color: AppColors.primaryWhite,
    fontSize: 16,
    maxHeight: 124,
  },

  textInputButton: {
    padding: 15,
  },

  chatsContainer: {
    width: "80%",
    marginVertical: 10,
    marginLeft: 0,
  },

  chats: {
    backgroundColor: AppColors.ternaryGreen,
    fontSize: 16,
    fontFamily: "Medium",
    padding: 10,
    borderRadius: 5,
    color: AppColors.primaryWhite,
  },

  receiverChat: {
    alignSelf: "flex-end",
    borderBottomRightRadius: 0,
  },

  senderChat: {
    alignSelf: "flex-start",
    borderBottomLeftRadius: 0,
  },

  chatsTime: {
    fontSize: 10,
    textTransform: "capitalize",
    color: AppColors.secondaryWhite,
    marginTop: 6,
  },
});
export default ChatWindowScreen;
