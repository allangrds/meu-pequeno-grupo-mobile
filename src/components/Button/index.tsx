import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'

const Button = ({
  onPress,
  text,
}) => (
  <RectButton style={styles.button} onPress={onPress}>
    <View accessible>
      <Text style={styles.text}>
        { text }
      </Text>
    </View>
  </RectButton>
)

Button.propTypes = {
  onPress: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Button
