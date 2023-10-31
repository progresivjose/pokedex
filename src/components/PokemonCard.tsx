import {useNavigation} from '@react-navigation/native';
import React, {memo, useEffect, useRef, useState} from 'react';
import {
	Dimensions,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import {getImageColors} from '../helpers/getColors';
import {SimplePokemon} from '../interfaces/pokemons';
import {FadeInImage} from './FadeInImage';

interface Props {
	pokemon: SimplePokemon;
}

const windowWidth = Dimensions.get('window').width;

const PokemonCard = ({pokemon}: Props) => {
	const [bgColor, setBgColor] = useState('grey');
	const isMounted = useRef(true);
	const navigator = useNavigation();

	const setCardColor = async () => {
		const [primary, _] = await getImageColors(pokemon.image);

		setBgColor(primary);
	};

	useEffect(() => {
		if (isMounted.current) {
			setCardColor();
		}

		return () => {
			isMounted.current = false;
		};
	}, []);

	return (
		<TouchableOpacity
			activeOpacity={0.8}
			onPress={() => navigator.navigate('PokemonScreen', {pokemon, bgColor})}>
			<View
				style={{
					...styles.cardContainer,
					width: windowWidth * 0.4,
					backgroundColor: bgColor,
				}}>
				<View>
					<Text style={styles.name}>
						{pokemon.name} {'\n#' + pokemon.id}
					</Text>
				</View>
				<View style={styles.pokebolaContainer}>
					<Image
						source={require('../assets/pokebola-blanca.png')}
						style={styles.pokebola}
					/>
				</View>
				<FadeInImage uri={pokemon.image} style={styles.pokemonImage} />
			</View>
		</TouchableOpacity>
	);
};

export default PokemonCard;

const styles = StyleSheet.create({
	cardContainer: {
		borderRadius: 10,
		marginHorizontal: 10,
		height: 120,
		width: 160,
		marginBottom: 25,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,

		elevation: 8,
	},
	name: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
		top: 20,
		left: 10,
	},
	pokemonImage: {
		width: 120,
		height: 120,
		position: 'absolute',
		right: -8,
	},
	pokebolaContainer: {
		width: 100,
		height: 100,
		position: 'absolute',
		bottom: 0,
		right: 0,
		overflow: 'hidden',
		borderBottomRightRadius: 10,
	},
	pokebola: {
		width: 100,
		height: 100,
		position: 'absolute',
		bottom: -20,
		right: -20,
		opacity: 0.5,
	},
});
