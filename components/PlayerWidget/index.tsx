import { AntDesign, FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Song } from "../../types";
import styles from "./styles";
import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";

const song = {
  id: "1",
  imageUri:
    "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
  title: "High on you",
  artist: "Helen",
  uri:
    "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
};

export const PlayerWidget = () => {
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [duration, setDuration] = useState<number | null>(null);
  const [position, setPosition] = useState<number | null>(null);

  const onPlaybackStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
  };
  const playCurrentSong = async () => {
    if (sound) {
      await sound.unloadAsync();
    }

    const { sound: newSound } = await Audio.Sound.createAsync(
      {
        uri: song.uri,
      },
      { shouldPlay: isPlaying },
      onPlaybackStatusUpdate
    );
    setSound(newSound);
  };

  const getProgress = () => {
    if (sound === null || duration === null || position === null) return 0;
    return (position / duration) * 100;
  };

  const onPlayPausePress = async () => {
    if (!sound) {
      return;
    }
    if (isPlaying) {
      await sound.stopAsync();
    } else {
      await sound.playAsync();
    }
  };

  useEffect(() => {
    // play the song
    playCurrentSong();
  }, []);
  return (
    <View style={styles.container}>
      <View style={{...styles.progress, width:`${getProgress()}%`}} />
      <View style={styles.row}>
        <Image style={styles.image} source={{ uri: song.imageUri }} />
        <View style={styles.rightContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.title}>{song.title}</Text>
            <Text style={styles.artist}>{song.artist}</Text>
          </View>
        </View>
        <View style={styles.iconsContainer}>
          <AntDesign
            name="hearto"
            size={moderateScale(25, 0.4)}
            color={"white"}
          />
          <TouchableOpacity onPress={onPlayPausePress}>
            <FontAwesome
              name={isPlaying ? "pause" : "play"}
              size={moderateScale(25, 0.4)}
              color={"white"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PlayerWidget;
