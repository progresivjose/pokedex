import React from 'react';
import {ActivityIndicator, Dimensions, Image} from 'react-native';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PokemonCard from '../components/PokemonCard';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {globalStyles} from '../themes/appTheme';

const HomeScreen: React.FC = () => {
	const {top} = useSafeAreaInsets();
	const {pokemonList, fetchPokemons} = usePokemonPaginated();
	return (
		<View style={globalStyles.globalMargin}>
			<Image
				source={require('../assets/pokebola.png')}
				style={globalStyles.pokebolaBG}
			/>

			<View style={{alignItems: 'center'}}>
				<FlatList
					data={pokemonList}
					keyExtractor={item => item.id.toString()}
					ListHeaderComponent={() => (
						<Text style={{...globalStyles.title, marginTop: top + 20}}>
							Pokedex
						</Text>
					)}
					renderItem={({item}) => <PokemonCard pokemon={item} />}
					numColumns={2}
					onEndReached={fetchPokemons}
					onEndReachedThreshold={0.4}
					ListFooterComponent={
						<ActivityIndicator style={{marginBottom: 20}} color="gray" />
					}
				/>
			</View>
		</View>
	);
};

export default HomeScreen;
