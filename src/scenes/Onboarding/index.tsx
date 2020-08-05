import React from 'react'

import OnboardingContainer from '../../containers/Onboarding'

const Onboarding = ({ navigation }) => {
  const goToLogin = () => (
    navigation.navigate('Login')
  )

  return (
    <OnboardingContainer
      goToLogin={goToLogin}
    />
  )
}

export default Onboarding
