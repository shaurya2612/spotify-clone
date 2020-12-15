import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
      flexDirection:"row",
      margin: moderateScale(10, 0.4)
  },
  rightContainer:{
    justifyContent:"space-evenly",
    marginLeft: moderateScale(15, 0.4)
  },
  image: {
    width: scale(50),
    height: scale(50),
  },
  title: {
    color: "white",
    fontSize:moderateScale(15, 0.4),
    marginBottom:verticalScale(-4)
  },
  artist: {
    color: "lightgray",
    fontSize:moderateScale(13, 0.4)
  },
});

export default styles;
