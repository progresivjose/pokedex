import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SimplePokemon} from '../interfaces/pokemons';
import HomeScreen from '../screens/HomeScreen';
import PokemonScreen from '../screens/PokemonScreen';

export type NavigatorProps = {
	HomeScreen: undefined;
	PokemonScreen: {
		pokemon: SimplePokemon;
		bgColor: string;
	};
	SearchScreen: undefined;
};

const Stack = createStackNavigator<NavigatorProps>();

const ListTab: React.FC = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				cardStyle: {
					backgroundColor: 'white',
				},
			}}>
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
			<Stack.Screen name="PokemonScreen" component={PokemonScreen} />
		</Stack.Navigator>
	);
};

export default ListTab;
