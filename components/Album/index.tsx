import React from 'react';
import { View } from 'react-native';

export type AlbumProps ={
    id: string,
    imageUri: string,
    artistHeadline: string
}

const Album = (props: AlbumProps) => {
    return(
        <View>
            {/* Image of the album*/}
            {/* Artist Headlines*/}
        </View>
    )
}

export default Album;