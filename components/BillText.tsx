import React from 'react'
import { StyleSheet, Text } from 'react-native'

type BillTextProps = {
  title: string
}

const BillText = (props: BillTextProps) => {
  return (
    <Text
      style={styles.text}
    >
      {props.title}
    </Text>
  )
}

export default BillText

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center'
  }
})