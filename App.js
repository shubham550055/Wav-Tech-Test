import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EmployeesScreen from './src/EmployeesScreen';
import EmployeDetailScreen from './src/EmployeDetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="EmployeesScreen"
          options={{headerShown: false}}
          component={EmployeesScreen}
        /> */}
        <Stack.Screen
          name="EmployeDetailScreen"
          options={{headerShown: false}}
          component={EmployeDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
