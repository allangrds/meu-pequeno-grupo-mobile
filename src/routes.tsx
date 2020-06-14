import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Onboarding from './scenes/Onboarding'
import { getValue, setValue } from './utils/helpers/asyncStorage'

const Stack = createStackNavigator()

function getInitialRouteName() {
  const showedOnboarding = getValue('showedOnboarding')

  if (showedOnboarding) {
    return 'Login'
  }

  setValue('showedOnboarding', 'true')

  return 'Onboarding'
}

const Routes = () => {
  const initialRouterName = getInitialRouteName()

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRouterName}
        headerMode="none"
      >
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
        />
        <Stack.Screen
          name="Login"
          component={Onboarding}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
