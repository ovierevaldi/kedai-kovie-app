import { COLORS } from '@/styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

const SearchInput = () => {
  return (
    <View
      style={styles.container}
    >
      <TextInput 
        style={styles.input}
        placeholder='Cari Menu...'
        placeholderTextColor={'white'}
      />
      
      <TouchableOpacity
        style={styles.button}
      >
        <Ionicons name="search" size={24} color="white" />
      </TouchableOpacity>
    </View>
  )
}

export default SearchInput

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4
  },
  input: {
    width: 300,
    backgroundColor: COLORS.red,
    textAlign: 'center',
  },
  button: {
    backgroundColor: COLORS.brown,
  }
});
