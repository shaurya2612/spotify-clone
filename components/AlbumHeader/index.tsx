import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Album } from "../../types";
import styles from "./styles";

export type AlbumHeaderProps = {
  album: Album;
};

export const AlbumHeader = (props: AlbumHeaderProps) => {
  const { album } = props;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: album.imageUri }} />
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{album.name}</Text>
      </View>
      <View style={styles.creatorContainer}>
        <Text style={styles.creator}>by {album.by} ·</Text>
        <Text style={styles.likes}>{album.numberOfLikes} Likes</Text>
      </View>

      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}>PLAY</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AlbumHeader;
