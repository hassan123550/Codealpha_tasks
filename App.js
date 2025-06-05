 import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CollegeAlertScreen from './screens/CollegeAlertScreen';
import SeminarsScreen from './screens/SeminarsScreen';
import ExamsScreen from './screens/ExamsScreen';
import FestsScreen from './screens/FestsScreen';
import NoticesScreen from './screens/NoticesScreen';


const Stack = createNativeStackNavigator();

const App = () => {

    return (
    <NavigationContainer>
      <Stack.Navigator initialRouterName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="College" component={CollegeAlertScreen}/>
        <Stack.Screen name="Seminars" component={SeminarsScreen}/>
        <Stack.Screen name="Exams" component={ExamsScreen}/>
        <Stack.Screen name="Fests" component={FestsScreen}/>
        <Stack.Screen name="Notices" component={NoticesScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
    );
};

export default App;

