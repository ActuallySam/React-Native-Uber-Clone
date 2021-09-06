import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import NavigateCard from '../components/NavigateCard';
import { createStackNavigator } from '@react-navigation/stack';

const MapScreen = () => {

    const Stack = createStackNavigator();

    return (
        <View>
            <View style={tw`h-1/2`}>
                <Map />
            </View>

            <View style={tw`h-1/2`}>
                <Stack.Navigator>
                    <Stack.Screen
                        name="NavigateCard"
                        component={NavigateCard}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="RideOptionsCard"
                        component={RideOptionsCard}
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
            </View>
        </View>
    );
};

export default MapScreen;

const styles = StyleSheet.create({});