import React from "react";
import { Image, View, Text } from "react-native";
import { Album } from "../../types";
import styles from "./styles";

export type AlbumProps = {
  album: Album
};

const AlbumComponent = (props: AlbumProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:"https://picsum.photos/200"}} />
      <Text style={styles.text}>{props.album.artistsHeadline}</Text>
    </View>
  );
};

export default AlbumComponent;
