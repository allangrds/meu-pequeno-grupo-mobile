import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

import styles from './styles'

type SubtitleProps = {
  text: string,
}

const Subtitle = ({ text }: SubtitleProps) => (
  <Text style={styles.text}>
    { text }
  </Text>
)

Subtitle.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Subtitle
