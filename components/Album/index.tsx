import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, View, Text, TouchableWithoutFeedback } from "react-native";
import Navigation from "../../navigation";
import { Album } from "../../types";
import styles from "./styles";

export type AlbumProps = {
  album: Album;
};

const AlbumComponent = (props: AlbumProps) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("AlbumScreen", { id: props.album.id });
  };
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: props.album.imageUri }}
        />
        <Text style={styles.text}>{props.album.artistsHeadline}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AlbumComponent;
