import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SimplePokemon} from '../interfaces/pokemons';
import HomeScreen from '../screens/HomeScreen';
import PokemonScreen from '../screens/PokemonScreen';
import SearchScreen from '../screens/SearchScreen';

export type NavigatorProps = {
	HomeScreen: undefined;
	PokemonScreen: {
		pokemon: SimplePokemon;
		bgColor: string;
	};
	SearchScreen: undefined;
};

const Stack = createStackNavigator<NavigatorProps>();

const SearchTab: React.FC = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				cardStyle: {
					backgroundColor: 'white',
				},
			}}>
			<Stack.Screen name="SearchScreen" component={SearchScreen} />
			<Stack.Screen name="PokemonScreen" component={PokemonScreen} />
		</Stack.Navigator>
	);
};

export default SearchTab;
