import {useEffect, useState} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import {PokemonPaginatedRespose, SimplePokemon} from '../interfaces/pokemons';

export const usePokemonSearch = () => {
	const [isFetching, setIsFetching] = useState(true);
	const [pokemonList, setPokemonList] = useState<SimplePokemon[]>([]);

	const mapPokemonList = (results: SimplePokemon[]) => {
		const newPokemonList: SimplePokemon[] = results.map(data => {
			const parts = data.url.split('/');
			const id = parts[parts.length - 2];
			data.id = parseInt(id);

			data.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

			return data;
		});

		setPokemonList([...pokemonList, ...newPokemonList]);
	};

	const fetchPokemons = async () => {
		setIsFetching(true);

		const response = await pokemonApi.get<PokemonPaginatedRespose>(
			'https://pokeapi.co/api/v2/pokemon/?limit=1200',
		);

		mapPokemonList(response.data.results);
		setIsFetching(false);
	};

	useEffect(() => {
		fetchPokemons();
	}, []);

	return {pokemonList, isFetching};
};
