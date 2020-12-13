import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding:moderateScale(20, 0.4)
  },
  image: {
    width: moderateScale(200, 0.4),
    height: moderateScale(200, 0.4),
    margin: moderateScale(15, 0.4),
  },
  name: {
    color: "white",
    fontSize: moderateScale(30, 0.4),
    fontWeight: "bold",
    marginTop:moderateScale(10, 0.4)
  },
  creatorContainer: {
    flexDirection: "row",
    marginTop: moderateScale(5, 0.4),
    marginBottom: moderateScale(3, 0.4)
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
    fontSize: moderateScale(18, 0.4),
  },
});

export default styles;
