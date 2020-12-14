import { useRoute } from "@react-navigation/native";
import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import AlbumHeader from "../components/AlbumHeader";
import SongListItem from "../components/SongListItem";
import albumDetails from "../data/albumDetails";

import {getAlbum} from '../graphql/queries';

export const AlbumScreen = () => {
  const route = useRoute();
  const albumId = route.params.id; 
  const [album, setAlbum] = useState(null)

  const fetchAlbumDetails = async () => {
    try {
      const data = await API.graphql(graphqlOperation(getAlbum, {id: albumId}))
      setAlbum(data.data.getAlbum)
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchAlbumDetails()
  }, [albumId])

  if (!album)
  {
    return <View style={{justifyContent:"center", alignItems:"center"}}><ActivityIndicator color={"white"} size={"large"}/></View>
  }

  return (
    <View>
      <FlatList
        data={album.songs.items}
        renderItem={({ item }) => <SongListItem song={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <AlbumHeader album={album} />}
      />
    </View>
  );
};

export default AlbumScreen;
