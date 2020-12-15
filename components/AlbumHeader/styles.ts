import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding:moderateScale(20, 0.4)
  },
  nameContainer:{
    textAlign:"center"
  },
  image: {
    width: scale(150),
    height: scale(150),
    margin: moderateScale(15, 0.4),
  },
  name: {
    color: "white",
    fontSize: moderateScale(22, 0.4),
    fontWeight: "bold",
    marginTop:verticalScale(10)
  },
  creatorContainer: {
    flexDirection: "row",
    marginTop: verticalScale(5),
    marginBottom: verticalScale(3)
  },
  creator: {
    color: "lightgray",
    margin: moderateScale(5, 0.4),
    fontSize: moderateScale(15, 0.4),
  },
  likes: {
    color: "lightgray",
    margin: moderateScale(5, 0.4),
    fontSize: moderateScale(15, 0.4),
  },
  button: {
    backgroundColor: "#1CD05D",
    height: moderateScale(50, 0.4),
    width: moderateScale(170, 0.4),
    borderRadius: moderateScale(50, 0.4),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: moderateScale(15, 0.4),
  },
});

export default styles;
