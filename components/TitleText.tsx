import { COLORS } from '@/styles'
import React from 'react'
import { StyleSheet, Text } from 'react-native'

type TitleTextProps = {
  title: string
}

const TitleText = (props: TitleTextProps) => {
  return (
    <Text style={styles.titleText}>{props.title}</Text>
  )
}

export default TitleText

const styles = StyleSheet.create({
   titleText: {
    fontSize: 42,
    textAlign: 'center',
    color: COLORS.red,
    padding: 14,
  },
})