import { COLORS } from '@/styles'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type QueueTextProp = {
  queueNo: number
}

const QueueText = (props: QueueTextProp) => {
  return (
    <View style={styles.circle}>
      <Text style={styles.queueText}>{props.queueNo}</Text>
    </View>
  )
}

export default QueueText

const styles = StyleSheet.create({
  circle: {
    width: 200,
    height: 200,
    borderRadius: 120,
    backgroundColor: COLORS.brown,
    justifyContent: 'center',
    alignItems: 'center',
  },
  queueText: {
    fontSize: 102,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
