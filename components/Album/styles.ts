import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    width: scale(200),
  },
  image: { width: "100%", height: scale(200) },
  text: {
    color: "grey",
    marginTop: 10,
  },
});

export default styles;
