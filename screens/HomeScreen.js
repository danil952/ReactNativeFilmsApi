
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, ActivityIndicator, FlatList, Text, View,TextInput, Button } from 'react-native';
import Row from "../Row";

function HomeScreen({navigation})
{
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [value, onChangeText] =useState('');
    const [confirm, setConfirm]=useState(false);

  
    useEffect(() => {
      fetch('http://www.omdbapi.com/?i=tt3896198&apikey=ed5a68e1&s='+value)
        .then((response) => response.json())
        .then((json) => setData(json.Search))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, [confirm]);

    onSelectContact = item => {
        navigation.push('Details', item);
      };
  
    return (
      <View style={{ flex: 1, padding: 24 }}>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={value}
            />
            <Button 
                onPress={()=>setConfirm(!confirm)}
                title="Search"
            >
            </Button>
      
          <FlatList
            data={data}
            keyExtractor={item=>item.imdbID}
            renderItem={({ item }) => (
                <Row item={item} onSelectContact={onSelectContact}></Row>
            )}
          />
      </View>
    );
}
export default HomeScreen;