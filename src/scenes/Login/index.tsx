import React from 'react'

import LoginContainer from '../../containers/Login'

const Login = ({ navigation }) => {
  const goToForgetPassword = () => (
    navigation.navigate('ForgetPassword')
  )

  const goToSignUp = () => (
    navigation.navigate('SignUp')
  )

  return (
    <LoginContainer
      goToForgetPassword={goToForgetPassword}
      goToSignUp={goToForgetPassword}
    />
  )
}

export default Login
