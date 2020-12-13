import { useRoute } from "@react-navigation/native";
import React from "react";
import { FlatList, Text, View } from "react-native";
import AlbumHeader from "../components/AlbumHeader";
import SongListItem from "../components/SongListItem";
import albumDetails from "../data/albumDetails";

export const AlbumScreen = () => {
  const route = useRoute();
  return (
    <View>
      <FlatList
        data={albumDetails.songs}
        renderItem={({ item }) => <SongListItem song={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <AlbumHeader album={albumDetails} />}
      />
    </View>
  );
};

export default AlbumScreen;
