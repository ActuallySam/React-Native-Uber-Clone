import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { TouchableOpacity, SafeAreaView, SafeStyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import tw from "tailwind-react-native-classnames";


const data = [
    {
        id: "Uber-X-123",
        title: "UberX",
        multiplier: 1,
        image: "https://links.papareact.com/3pn",
    },
    {
        id: "Uber-XL-456",
        title: "Uber XL",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8",
    },
    {
        id: "Uber-LUX-789",
        title: "Uber LUX",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf",
    },
]

const RideOptionsCard = () => {

    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);

    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('NavigateCard')} style={tw`absolute top-3 left-5 p-3 rounded-full`}>
                    <Icon name="chevron-left" type="fontawesome" />
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
            </View>

            <FlatList data={data} keyExtractor={(item) => item.id}
                renderItem={({ item: { id, title, multiplier, image }, item }) => (
                    <TouchableOpacity 
                        style={tw`flex-row justify-between items-center px-10 ${id === sellected?.id && "bg-gray-200"}`}
                        onPress={() => setSelected(item)}
                    >
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: "contain",
                            }}
                            source={{ uri: image }}
                        />
                        <View style={tw`-ml-6`}>
                            <Text style={tw`text-xl font-semibold`}>{title}</Text>
                            <Text>Travel time...</Text>
                        </View>
                        <Text style={tw`text-xl`}>Rs.9000</Text>
                    </TouchableOpacity>
                )}
            />

            <View>
                <TouchableOpacity style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}>
                    <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard;

const styles = StyleSheet.create({});
