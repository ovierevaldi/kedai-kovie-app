import { COLORS } from '@/styles'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const BigBackButton = () => {
  const router = useRouter();

  function onBigBackButtonPress(){
    router.push('/(tabs)')  
  }

  return (
    <TouchableOpacity
      onPress={onBigBackButtonPress}
      style={styles.button}
    >
      <Text
        style={styles.text}  
      >Kembali
      </Text>
    </TouchableOpacity>
  )
}

export default BigBackButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.brown,
    padding: 20,
    width: 250,
    alignSelf: 'center'
  },
  text: {
    fontSize: 24,
    color: '#FFF',
    textAlign: 'center'
  }
})