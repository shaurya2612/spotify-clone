import { StyleSheet } from "react-native";
import { moderateScale, scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    width: scale(135),
    margin: moderateScale(10, 0.4)
  },
  image: { width: "100%", height: scale(135) },
  text: {
    color: "grey",
    marginTop: 10,
  },
});

export default styles;
