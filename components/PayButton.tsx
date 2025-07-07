import { COLORS } from '@/styles'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const PayButton = () => {
  const router = useRouter();

  function onPayButtonPress(){
    router.push('/redirectPayment')  
  }

  return (
    <TouchableOpacity
      onPress={onPayButtonPress}
      style={styles.button}
    >
      <Text
        style={styles.text}  
      >Konfirmasi Pesanan
      </Text>
    </TouchableOpacity>
  )
}

export default PayButton

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