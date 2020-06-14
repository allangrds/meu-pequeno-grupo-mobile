import React from 'react'
import { View,Text } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Hello World 2
      </Text>
      <AppD />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
