/* eslint-disable */
import React from 'react'
import { View } from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'

import {
  Button,
  Input,
  TitleGroup,
} from '../../components'
import HeaderImage from '../../assets/images/header.svg'

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .email('Invalid email')
    .required('Required'),
})

const Login = ({
  goToForgetPassword,
  goToSignUp,
}) => {
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
        <Formik
          validationSchema={loginSchema}
          initialValues={{ email: '' }}
          onSubmit={values => {
            console.log('values - ', values)
          }}
        >
          {({ errors, handleChange, handleSubmit, values }) => (
            <>
              <Input
                label="Email"
                placeholder="Seu email"
                value={values.email}
                error={errors.email}
                onChangeText={handleChange('email')}
              />
              <Input
                label="Senha"
                placeholder="Sua senha"
                type="password"
                value={values.password}
                error={errors.password}
                onChangeText={handleChange('password')}
              />
              <Button
                color="primary"
                fullWidth
                text="Entrar"
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
        <Button
          color="primary"
          fullWidth
          clear
          text="Esqueci a senha"
          onPress={goToForgetPassword}
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
            onPress={goToSignUp}
          />
        </View>
      </View>
    </View>
  )
}

export default Login
