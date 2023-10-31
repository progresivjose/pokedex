import React, {useEffect, useState} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDebounce} from '../hooks/useDebounce';

interface Props {
    style?: StyleProp<ViewStyle>;
    onDebounce: (value: string) => void;
}

const SearchInput = ({style, onDebounce}: Props) => {
    const [textValue, setTextValue] = useState('');

    const {debounced} = useDebounce(textValue);

    useEffect(() => {
        onDebounce(debounced);
    }, [debounced]);

    return (
        <View style={{...styles.container, ...(style as any)}}>
            <View style={styles.textBackground}>
                <TextInput
                    placeholder="Buscar pokemon"
                    placeholderTextColor="grey"
                    style={styles.textInput}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={setTextValue}
                />
                <Icon name="search-outline" size={18} color="gray" />
            </View>
        </View>
    );
};

export default SearchInput;

const styles = StyleSheet.create({
    container: {},
    textBackground: {
        backgroundColor: '#F4F1F3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        color: 'black',
    },
});
