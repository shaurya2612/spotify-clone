import React, { useContext } from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AppContext } from "../../AppContext";
import { Song } from "../../types";
import styles from "./styles";

export type SongListItemProps = {
  song: Song;
};

export const SongListItem = (props: SongListItemProps) => {
  const {setSongId}  = useContext(AppContext)
  const { song } = props;
  const onPlay = () => {
    setSongId(song.id)
  };
  return (
    <TouchableOpacity onPress={onPlay}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: song.imageUri }} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}>{song.artist}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SongListItem;
