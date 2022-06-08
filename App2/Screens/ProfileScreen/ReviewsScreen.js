import React from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
//sub:: App Component
import AppScreen from "../../Components/AppComponents/AppScreen";
import AppText from "../../Components/AppComponents/AppText";
import ReviewCard from "../../Components/Others/ReviewCard";
import AppColors from "../../Config/AppColors";
//sub: Extra
const { width, height } = Dimensions.get("screen");
const data = [
  {
    callerID: 55452151,
    date: "28 Nov 2022",
    id: 1,
    name: "nikhil menan",
    rating: 3,
    time: "12:30",
  },
  {
    callerID: 55452151,
    date: "18 Nov 2022",
    id: 2,
    name: "varsa gupta",
    rating: 3,
    time: "12:30",
  },
  {
    callerID: 55452151,
    date: "16 Nov 2022",
    id: 3,
    name: "kaplana nainwal",
    rating: 3,
    time: "12:30",
  },

  {
    callerID: 55452151,
    date: "16 Nov 2022",
    id: 4,
    name: "kaplana nainwal",
    rating: 3,
    time: "12:30",
  },
  {
    callerID: 55452151,
    date: "16 Nov 2022",
    id: 5,
    name: "kaplana nainwal",
    rating: 3,
    time: "12:30",
  },

  {
    callerID: 55452151,
    date: "16 Nov 2022",
    id: 6,
    name: "kaplana nainwal",
    rating: 3,
    time: "12:30",
  },

  {
    callerID: 55452151,
    date: "16 Nov 2022",
    id: 7,
    name: "kaplana nainwal",
    rating: 3,
    time: "12:30",
  },
  {
    callerID: 55452151,
    date: "16 Nov 2022",
    id: 8,
    name: "kaplana nainwal",
    rating: 3,
    time: "12:30",
  },

  {
    callerID: 55452151,
    date: "16 Nov 2022",
    id: 9,
    name: "kaplana nainwal",
    rating: 3,
    time: "12:30",
  },
];

function ReviewsScreen({}) {
  return (
    <>
      <View style={[styles.container]}>
        {/* <AppText style={[styles.title]}>Review</AppText> */}
        <View style={[styles.reviewCardContainer]}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <>
                <ReviewCard
                  callerID={item.callerID}
                  date={item.date}
                  id={item.id}
                  name={item.name}
                  rating={item.rating}
                  time={item.time}
                />
              </>
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
    borderBottomWidth: 2,
    paddingBottom: 4,
    fontSize: 16,
    fontFamily: "SemiBold",
    marginVertical: 12,
  },
});
export default ReviewsScreen;
