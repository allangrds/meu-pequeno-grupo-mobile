import React, { useState } from 'react'
import { View } from 'react-native'

import {
  Button,
  Input,
  TitleGroup,
} from '../../components'
import HeaderImage from '../../assets/images/header.svg'
import validations from '../../utils/helpers/validations'

const Login = () => {
  const [errors, setErrors] = useState({})
  const [formValues, setFormValues] = useState({
    email: null,
    password: null,
  })
  const validator = validations(
    'login',
    formValues,
    setErrors,
  )
  const handleOnChangeText = name => value => (
    setFormValues({
      ...formValues,
      [name]: value,
    })
  )
  const handleOnPress = () => {
    const hasErrors = validator.hasErrors()
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#ffffff',
    }}>
      <HeaderImage
        width="100%"
        preserveAspectRatio="none"
      />
      <View style={{
        flex: 1,
        paddingBottom: 30,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 30,
      }}
      >
        <TitleGroup
          title="Login"
          subtitle="Digite os dados da conta"
        />
        <Input
          label="Email"
          placeholder="Seu email"
          onChangeText={handleOnChangeText('email')}
          onBlur={validator.validate('email')}
          error={errors.email}
        />
        <Input
          label="Senha"
          placeholder="Sua senha"
          type="password"
          onChangeText={handleOnChangeText('password')}
          onBlur={validator.validate('password')}
          error={errors.password}
        />
        <Button
          color="primary"
          fullWidth
          text="Entrar"
          onPress={handleOnPress}
        />
        <Button
          color="primary"
          fullWidth
          clear
          text="Esqueci a senha"
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}
        >
          <Button
            color="primary"
            fullWidth
            outline
            text="Cadastre-se"
          />
        </View>
      </View>
    </View>
  )
}

export default Login
