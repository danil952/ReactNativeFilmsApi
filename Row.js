import React, { useEffect, useState } from 'react';
import { TouchableOpacity, ActivityIndicator, FlatList, Text, View,TextInput, Button } from 'react-native';

function Row(props)
{

    return(
                <TouchableOpacity
                    onPress={() => props.onSelectContact(props.item)}>
                    <Text>{props.item.Title}, {props.item.Year}</Text>
                </TouchableOpacity>
    );
}

export default Row;