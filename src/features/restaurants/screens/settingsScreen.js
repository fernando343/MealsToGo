import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { FavouritesContext } from '../../../services/favourites/favourites.context';


export const SettingsScreen = () => {

    const { favourites } = useContext(FavouritesContext);

    return (

        <View>
            {
                favourites.map((restaurant) => {
                    const key = restaurant.name;
                    return (
                        <Text key={key}>{restaurant.name}</Text>
                    );
                })
            }
        </View>
    );
}