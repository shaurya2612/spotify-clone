import React from "react";
import { Text, View } from "react-native";
import { Album } from "../../types";
import styles from "./styles";

export type AlbumCategoryProps = {
  title: string;
  albums: [Album];
};

const AlbumCategory = (props: AlbumCategoryProps) => {
  return (
    <View>
      {/*Title of Category*/}
      <Text style={styles.title}>{props.title}</Text>
      {/* List of Albums*/}
    </View>
  );
};

export default AlbumCategory;
