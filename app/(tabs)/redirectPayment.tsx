import BigBackButton from '@/components/BigBackButton'
import QueueText from '@/components/QueueText'
import TitleText from '@/components/TitleText'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const RedirectPayment = () => {
  return (
    <SafeAreaView>
      <TitleText title='Order Successfull'/>

      <Text style={styles.infoText}>Pesanan Anda Telah dikonfirmasi oleh kasir kami</Text>

      <Text style={styles.queueInfoText}>Nomor Antrian</Text>

      <View style={{alignSelf: 'center', marginBottom: 50}}>
        <QueueText queueNo={123}/>
      </View>

      <BigBackButton />
    </SafeAreaView>
  )
}

export default RedirectPayment

const styles = StyleSheet.create({
  infoText: {
    fontSize: 20,
    maxWidth: 350,
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 30
  },
   queueInfoText: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 30
  },
  
})