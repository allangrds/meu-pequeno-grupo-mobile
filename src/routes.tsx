import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Onboarding from './scenes/Onboarding'

const Stack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Dnboarding"
        headerMode="none"
      >
        <Stack.Screen
          name="Dnboarding"
          component={Onboarding}
        />
        <Stack.Screen
          name="Bnboarding"
          component={Onboarding}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
