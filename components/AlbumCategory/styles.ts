import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

const styles = StyleSheet.create({
    container:{
        margin: moderateScale(10, 0.4)
    },
    title:{
        color:"white",
        fontSize:moderateScale(25, 0.4),
        fontWeight:"bold",
    }
})

export default styles;