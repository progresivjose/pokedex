import {useEffect, useRef, useState} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import {PokemonPaginatedRespose, SimplePokemon} from '../interfaces/pokemons';

export const usePokemonPaginated = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [pokemonList, setPokemonList] = useState<SimplePokemon[]>([]);
	const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon/');

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
		setIsLoading(true);

		const response = await pokemonApi.get<PokemonPaginatedRespose>(
			nextPageUrl.current,
		);
		nextPageUrl.current = response.data.next;

		mapPokemonList(response.data.results);

		setIsLoading(false);
	};

	useEffect(() => {
		fetchPokemons();
	}, []);

	return {pokemonList, fetchPokemons, isLoading};
};
