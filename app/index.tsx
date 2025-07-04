import SearchInput from "@/components/SearchInput";
import { COLORS } from '@/styles';
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Text
        style={styles.titleText}
      >Kedai Kovie</Text>

      <SearchInput />
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 42,
    textAlign: 'center',
    color: COLORS.red,
    padding: 14
  }
})
