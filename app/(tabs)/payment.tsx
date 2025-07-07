import BillText from '@/components/BillText';
import BillTitleText from '@/components/BillTitleText';
import InputName from '@/components/InputName';
import Line from '@/components/Line';
import PayButton from '@/components/PayButton';
import TitleText from '@/components/TitleText';
import { formatAmount, formatPriceForBill } from '@/libs/numberFormatter';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type OrderProp = {
  amount: number;
  name: string;
  price: number;
}

const data: OrderProp[] = [
  { amount: 1, name: 'Kopi Daeng', price: 52000 },
  { amount: 2, name: 'Teh Tarik', price: 36000 },
  { amount: 1, name: 'Roti Bakar', price: 25000 },
];

const payment = () => {
  const renderListOrder = () => {
    return (
      data.map((order, index) => (
        <View
          key={index}
          style={[styles.flexRow]}
        >
          <View 
            style={styles.flexOne}
          >
            <BillText 
              title={formatAmount(order.amount) + ' ' + order.name}
            />
            <Text style={styles.centerText}></Text>
          </View>

          <View
            style={styles.flexOne}
          >
            <BillText 
              title={formatPriceForBill(order.price)}
            />
          </View>
        </View>
      ))
    )
  }

  return (
    <View>
      <View style={{ marginTop: 20, marginBottom: 10 }}>
        <TitleText 
          title='Order List'
        />
      </View>
      <View
        style={[styles.flexRow, { marginBottom: 12}]}
      >
        <View style={styles.flexOne}>
          <BillTitleText 
            title='Nama Pesanan'
          />
        </View>
        
        <View style={styles.flexOne}>
          <BillTitleText 
            title='Total'
          />
        </View>
      </View>
      {renderListOrder()}

      <Line />

      <View
        style={[styles.flexRow, { marginBottom: 12}]}
      >
        <View style={styles.flexOne}>
          <BillText 
            title='Total'
          />
        </View>
        
        <View style={styles.flexOne}>
          <BillText 
            title={formatPriceForBill(15000)}
          />
        </View>
      </View>

      <View style={{marginTop: 20}}>
        <InputName />
      </View>

      <View style={{marginTop: 20}}>
        <PayButton />
      </View>
    </View>
  )
}

export default payment

const styles = StyleSheet.create({
  flexRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  flexOne: {
    flex: 1
  },
  centerText: {
    textAlign: 'center'
  }
})