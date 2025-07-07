import React from 'react'
import { StyleSheet, Text } from 'react-native'

type BillTitleTextProps = {
  title: string
}

const BillTitleText = (props: BillTitleTextProps) => {
  return (
    <Text
      style={styles.text}
    >
      {props.title}
    </Text>
  )
}

export default BillTitleText

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    textAlign: 'center'
  }
})