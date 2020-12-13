import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";

const album = {
  id: "11",
  name: "Good Vibes",
  by: "Spotify",
  numberOfLikes: 38,
  imageUri:
    "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
  artistsHeadline: "Taylor Swift, Kygo Objective C, Avicii",
  song: [
    {
      id: "1",
      imageUri:
        "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
      title: "High on you",
      artist: "Helen",
    },
    {
      id: "2",
      imageUri:
        "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
      title: "Lorem Ipsum",
      artist: "Helen",
    },
    {
      id: "3",
      imageUri:
        "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
      title: "Hello from the other side",
      artist: "Helen",
    },
    {
      id: "1",
      imageUri:
        "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
      title: "High on you",
      artist: "Helen",
    },
  ],
};

export const AlbumScreen = () => {
  const route = useRoute();
  return (
    <View>
      <Text style={{ color: "white" }}>Hello</Text>
    </View>
  );
};

export default AlbumScreen;
