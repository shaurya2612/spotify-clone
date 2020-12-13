import { AntDesign, FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";
import { Song } from "../../types";
import styles from "./styles";

export const PlayerWidget = () => {
  const song = {
    id: "1",
    imageUri:
      "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
    title: "High on you",
    artist: "Helen",
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: song.imageUri }} />
      <View style={styles.rightContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}>{song.artist}</Text>
        </View>
        <View style={styles.iconsContainer}>
          <AntDesign name="hearto" size={30} color={"white"} />
          <FontAwesome name="play" size={30} color={"white"} />
        </View>
      </View>
    </View>
  );
};

export default PlayerWidget;
