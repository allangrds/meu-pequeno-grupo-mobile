import React from 'react'
import { View } from 'react-native'

import Subtitle from '../Subtitle'
import Title from '../Title'

import styles from './styles'

const TitleGroup = ({
  title,
  subtitle,
}) => (
  <View style={styles.view}>
    <Title text={title} />
    <Subtitle text={subtitle} />
  </View>
)

export default TitleGroup
