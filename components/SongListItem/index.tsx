import React from "react";
import { Image, Text, View } from "react-native";
import { Song } from "../../types";
import styles from "./styles";

export type SongListItemProps = {
  song: Song;
};

export const SongListItem = (props: SongListItemProps) => {
  const { song } = props;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: song.imageUri }} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.artist}>{song.artist}</Text>
      </View>
    </View>
  );
};

export default SongListItem;
