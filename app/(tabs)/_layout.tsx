import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from "expo-router";

export default function TabLayout(){
  return(
    <Tabs screenOptions={{ headerShown: false}}>
      <Tabs.Screen 
        name="index"
        options={{
          title: 'Menu',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />

      <Tabs.Screen 
        name="payment"
        options={{
          title: 'Payment',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
    </Tabs>
  )
}