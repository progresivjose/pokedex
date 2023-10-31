import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchScreen from '../screens/SearchScreen';
import ListTab from './ListTab';
import SearchTab from './SearchTab';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
	return (
		<Tab.Navigator
			sceneContainerStyle={{
				backgroundColor: 'white',
			}}
			screenOptions={{
				tabBarLabel: undefined,
				tabBarActiveTintColor: '#5856D6',
				tabBarStyle: {
					height: 60,
					position: 'absolute',
					backgroundColor: 'rgba(255,255,255,0.92)',
				},
				tabBarLabelStyle: {
					marginBottom: 10,
					borderWidth: 0,
					elevation: 0,
				},
			}}>
			<Tab.Screen
				name="ListTab"
				component={ListTab}
				options={{
					headerShown: false,
					tabBarLabel: 'Listado',
					tabBarIcon: ({color}) => (
						<Icon color={color} size={20} name="list-outline" />
					),
				}}
			/>
			<Tab.Screen
				name="SearchTab"
				component={SearchTab}
				options={{
					headerShown: false,
					tabBarLabel: 'Buscar',
					tabBarIcon: ({color}) => (
						<Icon color={color} size={20} name="search-outline" />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default TabNavigator;
