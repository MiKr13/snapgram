import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from 'declarations/RouteStack'
import LandingScreen from 'components/auth/Landing.tsx'

const Stack = createStackNavigator<RootStackParamList>()

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default App
