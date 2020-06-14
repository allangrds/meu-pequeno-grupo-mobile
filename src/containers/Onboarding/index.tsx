import React from 'react'
import { View } from 'react-native'
import OnboardingSwiper from 'react-native-onboarding-swiper'

import styles from './styles'
import { Button } from '../../components'
import FirstImage from '../../assets/images/scenes/onboarding/first.svg'
import SecondImage from '../../assets/images/scenes/onboarding/second.svg'

const Onboarding = () => (
  <OnboardingSwiper
    bottomBarHighlight={false}
    nextLabel="Próximo"
    showSkip={false}
    titleStyles={styles.titleStyles}
    subTitleStyles={styles.subTitleStyles}
    containerStyles={styles.containerStyles}
    NextButtonComponent={({ nextLabel, onPress }) => (
      <View style={styles.view}>
        <Button
          text={nextLabel}
          onPress={onPress}
        />
      </View>
    )}
    DoneButtonComponent={() => (
      <View style={styles.view}>
        <Button text="Começar" />
      </View>
    )}
    pages={
      [
        {
          backgroundColor: '#fff',
          title: 'Encontre um pequeno grupo',
          subtitle: 'É só você informar seu endereço que a gente pesquisa',
          image: (
            <FirstImage
              width={400}
            />
          ),
        },
        {
          backgroundColor: '#fff',
          title: 'Crie seu pequeno grupo',
          subtitle: 'Onde? Quando? Que  eriodicidade? Tem quantidade de vagas? Precisa levar algo?',
          image: (
            <SecondImage
              width={400}
            />
          ),
        },
      ]
    }
  />
)

export default Onboarding
