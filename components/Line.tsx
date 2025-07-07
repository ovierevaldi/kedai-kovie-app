import React from 'react'
import { StyleSheet, View } from 'react-native'

const Line = () => {
  return (
    <View style={styles.line} />
  )
}

export default Line

const styles = StyleSheet.create({
  line: {
    height: 2,
    backgroundColor: '#000',
    marginVertical: 10,
  },
});