import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

import styles from './styles'

type TitleProps = {
  text: string,
}

const Title = ({ text }: TitleProps) => (
  <Text style={styles.text}>
    { text }
  </Text>
)

Title.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Title
