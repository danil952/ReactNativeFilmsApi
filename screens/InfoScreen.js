import React, { useEffect, useState } from 'react';
import { Image, Text, View} from 'react-native';

function InfoScreen({route})
{
    const data=route.params
    return(
        <View>
            <Image
                style={{
                    resizeMode: "contain",
                    height: 200,
                    width: 400
                }}
                source={{uri: data.Poster}}
            />
            <Text>{data.Title}</Text>
            <Text>{data.Year}</Text>
        </View>
    );
}

export default InfoScreen;