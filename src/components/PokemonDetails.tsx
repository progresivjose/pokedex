import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {PokemonFull} from '../interfaces/pokemons';
import {globalStyles} from '../themes/appTheme';
import {FadeInImage} from './FadeInImage';

interface Props {
    pokemon: PokemonFull;
}

const PokemonDetails = ({pokemon}: Props) => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                ...StyleSheet.absoluteFillObject,
            }}>
            <View style={{...globalStyles.globalMargin, marginTop: 370}}>
                <Text style={{...styles.title}}>Types</Text>
                <View style={{flexDirection: 'row'}}>
                    {pokemon.types.map(({type}) => (
                        <Text
                            key={type.name}
                            style={{...styles.regularText, marginRight: 10}}>
                            {type.name}
                        </Text>
                    ))}
                </View>

                <Text style={{...styles.title}}>Peso</Text>
                <Text style={{...styles.regularText}}>{pokemon.weight}kg</Text>
            </View>

            <View style={{...globalStyles.globalMargin, marginTop: 20}}>
                <Text style={{...styles.title}}>Sprites</Text>

                <ScrollView style={styles.sprites} horizontal={true}>
                    <FadeInImage
                        uri={pokemon.sprites.front_default}
                        style={styles.basicSprite}
                    />
                    <FadeInImage
                        uri={pokemon.sprites.back_default}
                        style={styles.basicSprite}
                    />
                    <FadeInImage
                        uri={pokemon.sprites.front_shiny}
                        style={styles.basicSprite}
                    />
                    <FadeInImage
                        uri={pokemon.sprites.back_shiny}
                        style={styles.basicSprite}
                    />
                </ScrollView>
            </View>

            <View style={{...globalStyles.globalMargin, marginTop: 20}}>
                <Text style={{...styles.title}}>Habilidaes</Text>

                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {pokemon.abilities.map(({ability}) => (
                        <Text
                            key={ability.name}
                            style={{...styles.regularText, marginRight: 10}}>
                            {ability.name}
                        </Text>
                    ))}
                </View>
            </View>

            <View style={{...globalStyles.globalMargin, marginTop: 20}}>
                <Text style={{...styles.title}}>Movimientos</Text>

                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {pokemon.moves.map(({move}) => (
                        <Text
                            key={move.name}
                            style={{...styles.regularText, marginRight: 10}}>
                            {move.name}
                        </Text>
                    ))}
                </View>
            </View>

            <View style={{...globalStyles.globalMargin, marginTop: 20}}>
                <Text style={{...styles.title}}>Stats</Text>

                <View style={{}}>
                    {pokemon.stats.map((stat, index) => (
                        <View
                            style={{flexDirection: 'row'}}
                            key={stat.stat.name + index}>
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                    width: 150,
                                }}>
                                {stat.stat.name}
                            </Text>
                            <Text
                                style={{
                                    ...styles.regularText,
                                    fontWeight: 'bold',
                                }}>
                                {stat.base_stat}
                            </Text>
                        </View>
                    ))}
                </View>

                <View style={{marginBottom: 20, alignItems: 'center'}}>
                    <FadeInImage
                        uri={pokemon.sprites.front_default}
                        style={styles.basicSprite}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default PokemonDetails;

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    regularText: {
        fontSize: 19,
        color: 'black',
    },
    sprites: {},
    basicSprite: {
        width: 100,
        height: 100,
    },
});
