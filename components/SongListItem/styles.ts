import { StyleSheet } from "react-native";
import { moderateScale, scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
      flexDirection:"row",
      margin: moderateScale(10, 0.4)
  },
  rightContainer:{
    justifyContent:"space-around",
    marginLeft: moderateScale(15, 0.4)
  },
  image: {
    width: scale(50),
    height: scale(50),
  },
  title: {
    color: "white",
    fontSize:moderateScale(18, 0.4)
  },
  artist: {
    color: "lightgray",
    fontSize:moderateScale(14, 0.4)
  },
});

export default styles;
