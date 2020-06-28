import React, { useState } from 'react'
import {
  View, Text, TouchableOpacity, TextInput,
} from 'react-native'

import EyeIcon from '../../assets/images/eye.svg'

const Input = ({
  label,
  onChangeText,
  onBlur,
  placeholder,
  type,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const [active, setActive] = useState(false)
  const handleOnBlur = () => {
    setActive(false)

    if (onBlur) {
      onBlur()
    }
  }
  const handleOnFocus = () => setActive(true)
  const handleShowPassword = () => setShowPassword(!showPassword)
  const secureTextEntry = type === 'password' && !showPassword

  const borderColor = active
    ? '#3282FB'
    : '#BEBEBE'
  const borderErrorColor = error
    ? '#e74c3c'
    : borderColor

  return (
    <>
      <View
        style={{
          borderBottomWidth: 2,
          borderBottomColor: borderErrorColor,
          paddingTop: 10,
          paddingBottom: 10,
          marginBottom: error ? 10 : 20,
        }}
      >
        <Text
          style={{
            fontFamily: 'Roboto_400Regular',
            fontSize: 16,
            color: '#939393',
          }}
        >
          { label }
        </Text>
        <TextInput
          style={{
            fontFamily: 'Roboto_400Regular',
            paddingRight: type === 'password' ? 70 : 0,
            fontSize: 18,
          }}
          onChangeText={onChangeText}
          placeholderTextColor="#000"
          placeholder={placeholder}
          onBlur={handleOnBlur}
          onFocus={handleOnFocus}
          secureTextEntry={secureTextEntry}
        />
        {
          type === 'password'
          && <TouchableOpacity
            style={{
              position: 'absolute',
              right: 0,
              top: 22,
              alignItems: 'center',
            }}
            onPress={handleShowPassword}
          >
            <EyeIcon />
            <Text
              style={{
                fontFamily: 'Roboto_400Regular',
                fontSize: 12,
              }}
            >
              {
                showPassword
                  ? 'Mostrando'
                  : 'Ocultando'
              }
            </Text>
          </TouchableOpacity>
        }
      </View>
      {
        error &&
        <Text
          style={{
            color: '#e74c3c',
            marginBottom: 20,
          }}
        >
          { error }
        </Text>
      }
    </>
  )
}

export default Input
