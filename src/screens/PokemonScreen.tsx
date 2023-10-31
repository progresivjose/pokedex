import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
	ActivityIndicator,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {FadeInImage} from '../components/FadeInImage';
import PokemonDetails from '../components/PokemonDetails';
import {usePokemon} from '../hooks/usePokemon';
import {NavigatorProps} from '../navigators/StackNavigator';

interface Props extends StackScreenProps<NavigatorProps, 'PokemonScreen'> {}

const PokemonScreen = ({route, navigation}: Props) => {
	const {pokemon, bgColor} = route.params;
	const {top} = useSafeAreaInsets();
	const {pokemon: details, isLoading} = usePokemon(pokemon.id);

	return (
		<View style={{flex: 1}}>
			<View style={{...styles.headerContainer, backgroundColor: bgColor}}>
				<TouchableOpacity
					onPress={() => navigation.pop()}
					activeOpacity={0.8}
					style={{...styles.backButton, top: top + 5}}>
					<Icon name="arrow-back-outline" color="white" size={35} />
				</TouchableOpacity>

				<Text style={{...styles.pokemonName, top: top + 45}}>
					{pokemon.name + '\n'}#{pokemon.id}
				</Text>

				<Image
					source={require('../assets/pokebola-blanca.png')}
					style={styles.pokeball}
				/>

				<FadeInImage uri={pokemon.image} style={styles.pokemonImg} />
			</View>

			{isLoading ? (
				<View style={styles.activityIndicator}>
					<ActivityIndicator color={bgColor} size={50} />
				</View>
			) : (
				<PokemonDetails pokemon={details} />
			)}
		</View>
	);
};

export default PokemonScreen;

const styles = StyleSheet.create({
	headerContainer: {
		height: 370,
		zIndex: 999,
		borderBottomLeftRadius: 1000,
		borderBottomRightRadius: 1000,
		alignItems: 'center',
		width: '100%',
	},
	backButton: {
		position: 'absolute',
		left: 20,
	},
	pokemonName: {
		color: 'white',
		fontSize: 40,
		alignSelf: 'flex-start',
		left: 20,
	},
	pokeball: {
		width: 250,
		height: 250,
		bottom: -20,
		opacity: 0.7,
	},
	pokemonImg: {
		width: 250,
		height: 250,
		position: 'absolute',
		bottom: -15,
	},
	activityIndicator: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
