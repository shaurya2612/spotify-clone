import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import AlbumCategory from "../components/AlbumCategory";
import albumCategories from "../data/albumCategories";

import { API, graphqlOperation } from "aws-amplify";
import { listAlbumCategorys } from "../graphql/queries";

export default function HomeScreen() {

  const [categories, setCategories] = useState([]);

  const fetchAlbumCategories = async () => {
    try {
      const data = await API.graphql(graphqlOperation(listAlbumCategorys));
      setCategories(data.data.listAlbumCategorys.items);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAlbumCategories();
  }, []);

  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => (
        <AlbumCategory title={item.title} albums={item.albums.items} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
