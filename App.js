import { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [isOn, setIsOn] = useState(false);

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: isOn ? 'white' : 'black' }]}
      onPress={() => setIsOn(!isOn)}
      activeOpacity={1}
    >
      <Ionicons
        name={isOn ? 'flash' : 'flash-outline'}
        size={100}
        color={isOn ? 'black' : 'white'}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
