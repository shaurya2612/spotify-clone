import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: verticalScale(60),
    backgroundColor: "#212121",
    width: "100%",
    borderBottomWidth: moderateScale(1, 0.4),
    borderColor: "black",
    // alignItems: "center",
  },
  progress:{
    height: verticalScale(3),
    backgroundColor:"#bcbcbc"
  },
  row:{
    flexDirection:"row"
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
