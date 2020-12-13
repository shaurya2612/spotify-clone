import { StyleSheet } from "react-native";
import { moderateScale, scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: moderateScale(73, 0.4),
    backgroundColor: "#131313",
    width: "100%",
    flexDirection: "row",
    // margin: moderateScale(10, 0.4),
    borderBottomWidth: moderateScale(3, 0.4),
    borderColor: "black",
    alignItems: "center",
  },
  rightContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: scale(100),
    justifyContent: "space-around",
  },
  image: {
    width: scale(50),
    height: scale(50),
    marginRight: moderateScale(5, 0.4),
  },
  title: {
    color: "white",
    fontSize: moderateScale(15, 0.4),
    fontWeight: "bold",
    margin: moderateScale(10, 0.4),
  },
  artist: {
    color: "lightgray",
    fontSize: moderateScale(15, 0.4),
  },
});

export default styles;
