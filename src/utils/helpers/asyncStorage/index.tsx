import AsyncStorage from '@react-native-community/async-storage'

const getValue = async (name) => await AsyncStorage.getItem(`@${name}`)

const setValue = async (name, value) => (
  await AsyncStorage.setItem(`@${name}`, value)
)

export {
  getValue,
  setValue,
}
