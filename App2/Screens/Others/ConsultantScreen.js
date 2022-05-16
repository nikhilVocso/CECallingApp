import React, { useState } from "react";
import { View, StyleSheet, FlatList, ScrollView, Alert } from "react-native";
///////////////////////////////////////////////////////////////////////////////////////////
import CESearchBar from "../../Components/Others/CESearchBar";
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppColors from "../../Config/AppColors";
import ConsultantListCard from "../../Components/ConsultantListCard/ConsultantListCard";
import AppComponentHorizontalSeparator from "../../Components/AppComponents/AppComponentHorizontalSeparator";
///////////////////////////////////////////////////////////////////////////////////////////
const consultantListCardData = [
  {
    callTime: 1200,
    categories: "coder",
    city: "delhi",
    id: 1,
    image: require("../../Assets/photo.jpeg"),
    name: "Nikhil Menan",
    profile: "GST",
    verify: true,
    available: true,
  },
  {
    callTime: 1200,
    categories: "coder",
    city: "delhi",
    id: 2,
    image: require("../../Assets/photo.jpeg"),
    name: "Nikhil Menan",
    profile: "GST",
    verify: true,
    available: false,
  },
  {
    callTime: 1200,
    categories: "coder",
    city: "delhi",
    id: 3,
    image: require("../../Assets/photo.jpeg"),
    name: "Nikhil Menan",
    profile: "GST",
    verify: false,
    available: true,
  },
  {
    callTime: 1200,
    categories: "coder",
    city: "delhi",
    id: 4,
    image: require("../../Assets/photo.jpeg"),
    name: "Nikhil Menan",
    profile: "GST",
    verify: true,
    available: true,
  },
  {
    callTime: 1200,
    categories: "coder",
    city: "delhi",
    id: 5,
    image: require("../../Assets/photo.jpeg"),
    name: "Nikhil Menan",
    profile: "GST",
    verify: true,
    available: false,
  },
];
///////////////////////////////////////////////////////////////////////////////////////////
function ConsultantScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    Alert.alert("Alert");
  };

  return (
    <>
      <AppScreen style={styles.screen}>
        <View style={styles.consultantListCard}>
          <FlatList
            data={consultantListCardData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <>
                <ConsultantListCard
                  callTime={item.callTime}
                  categories={item.categories}
                  city={item.city}
                  image={item.image}
                  name={item.name}
                  profile={item.profile}
                  style={styles.consultantListCardStyle}
                  verify={item.verify}
                  available={item.available}
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                  navigation={navigation}
                />

                {/* <AppComponentHorizontalSeparator /> */}
              </>
            )}
            ListHeaderComponent={
              <CESearchBar
                placeholder="GST Consultant"
                style={{ paddingRight: 0 }}
              />
            }
            stickyHeaderIndices={[0]}
          />
        </View>
      </AppScreen>
    </>
  );
}
///////////////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  screen: {
    backgroundColor: AppColors.secondaryWhite,
    flex: 1,
  },

  consultantListCardStyle: {
    marginBottom: 6,
  },
});
export default ConsultantScreen;
