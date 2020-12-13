import { useRoute } from "@react-navigation/native";
import React from "react";
import { FlatList, Text, View } from "react-native";
import SongListItem from "../components/SongListItem";
import albumDetails from "../data/albumDetails";

export const AlbumScreen = () => {
  const route = useRoute();
  return (
    <View>
      <Text style={{ color: "white" }}>Hello</Text>
      <FlatList
        data={albumDetails.songs}
        renderItem={({ item }) => <SongListItem song={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default AlbumScreen;
