import { COLORS } from '@/styles'
import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const InputName = () => {
  return (
    <View 
      style={styles.container}
    >
      <Text
        style={styles.title}
      >Nama Pemesan</Text>
      <TextInput 
        style={styles.input}
      />
    </View>
  )
}

export default InputName

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 20
  },
  input: {
    width: 300,
    backgroundColor: COLORS.gray,
  },
})