import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import capitalize from '../../utils/helpers/formatters/capitalize'
import styles from './styles'

type ButtonProps = {
  color: string,
  clear: boolean,
  fullWidth: boolean,
  onPress: Function,
  outline: boolean,
  style: object,
  text: string,
}

const Button = ({
  color,
  clear,
  fullWidth,
  onPress,
  outline,
  style = {},
  text,
}: ButtonProps) => {
  const capitalizedColor = capitalize(color)
  const getButtonStyles = () => {
    const fullScreenStyle = fullWidth
      ? styles.fullWidth
      : null
    const outlineStyle = outline
      ? styles[`buttonOutline${capitalizedColor}`]
      : null
    const backgroundColorStyle = !outline && !clear
      ? styles[`button${capitalizedColor}`]
      : null

    return [
      styles.button,
      backgroundColorStyle,
      outlineStyle,
      fullScreenStyle,
      style,
    ]
  }

  const getTextStyles = () => {
    const colorStyle = !outline && !clear
      ? styles[`text${capitalizedColor}`]
      : styles[`textOutline${capitalizedColor}`]

    return [
      styles.text,
      colorStyle,
    ]
  }

  return (
    <RectButton
      style={getButtonStyles()}
      onPress={onPress}
    >
      <View accessible>
        <Text style={getTextStyles()}>
          { text }
        </Text>
      </View>
    </RectButton>
  )
}

Button.propTypes = {
  color: PropTypes.oneOf(['primary']).isRequired,
  clear: PropTypes.bool,
  fullWidth: PropTypes.bool,
  outline: PropTypes.bool,
  style: PropTypes.shape({}),
  onPress: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

Button.defaultProps = {
  clear: false,
  fullWidth: false,
  outline: false,
  style: {},
}

export default Button
