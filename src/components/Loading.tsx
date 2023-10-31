import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

// import { Container } from './styles';

const Loading: React.FC = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size={50} color="grey" />
            <Text style={{color: 'black', marginTop: 10}}>Cargando ...</Text>
        </View>
    );
};

export default Loading;
