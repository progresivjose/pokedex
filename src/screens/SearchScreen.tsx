import React, {useEffect, useState} from 'react';
import {
	View,
	Platform,
	ActivityIndicator,
	Text,
	FlatList,
	Dimensions,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Loading from '../components/Loading';
import PokemonCard from '../components/PokemonCard';
import SearchInput from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {SimplePokemon} from '../interfaces/pokemons';
import {globalStyles} from '../themes/appTheme';

const screenWidth = Dimensions.get('screen').width;

const SearchScreen: React.FC = () => {
	const {top} = useSafeAreaInsets();
	const {pokemonList, isFetching} = usePokemonSearch();
	const [filteredPokemon, setFilteredPokemon] = useState<SimplePokemon[]>([]);
	const [termValue, setTermValue] = useState('');

	useEffect(() => {
		if (termValue.length == 0) {
			return setFilteredPokemon([]);
		}

		if (isNaN(Number(termValue))) {
			setFilteredPokemon(
				pokemonList.filter(pokemon =>
					pokemon.name.toLowerCase().includes(termValue.toLowerCase()),
				),
			);
		} else {
			const pokemonById = pokemonList.find(
				pokemon => pokemon.id === Number(termValue),
			);
			setFilteredPokemon(pokemonById ? [pokemonById] : []);
		}
	}, [termValue]);

	if (isFetching) {
		return <Loading />;
	}

	return (
		<View
			style={{
				flex: 1,
				marginHorizontal: 20,
				marginBottom: 50,
			}}>
			<SearchInput
				onDebounce={(value: string) => setTermValue(value)}
				style={{
					zIndex: 999,
					position: 'absolute',
					width: screenWidth - 40,
					top: Platform.OS === 'ios' ? top : top + 30,
				}}
			/>

			<View style={{alignItems: 'center'}}>
				<FlatList
					data={filteredPokemon}
					keyExtractor={item => item.id.toString()}
					ListHeaderComponent={() => (
						<Text style={{...globalStyles.title, marginTop: top + 80}}>
							{termValue}
						</Text>
					)}
					renderItem={({item}) => <PokemonCard pokemon={item} />}
					numColumns={2}
				/>
			</View>
		</View>
	);
};

export default SearchScreen;
