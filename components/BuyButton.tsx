import { COLORS } from '@/styles';
import React from 'react';
import { Button } from 'react-native';
import Toast from 'react-native-toast-message';

type BuyButtonProp = {
  product_name? : string;
}

const BuyButton = (props: BuyButtonProp) => {
  const onButtonPressed = () => {
    Toast.show({
      type: 'success',
      text1: `${props.product_name ?? ''} Added Into Payment`,
    });
  };

  return (
    <Button
      title='Beli'
      color={COLORS.brown}
      onPress={onButtonPressed}
    />
  )
}

export default BuyButton