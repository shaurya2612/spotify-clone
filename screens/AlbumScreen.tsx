import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import SongListItem from "../components/SongListItem";
import albumDetails from "../data/albumDetails";

export const AlbumScreen = () => {
  const route = useRoute();
  return (
    <View>
      <Text style={{ color: "white" }}>Hello</Text>
      <SongListItem song={albumDetails.songs[0]} />
    </View>
  );
};

export default AlbumScreen;
