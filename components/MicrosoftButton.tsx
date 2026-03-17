import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

interface MicrosoftButtonProps {
  onPress: () => void;
}

const MicrosoftButton = ({ onPress }: MicrosoftButtonProps) => (
  <TouchableOpacity style={styles.btnMs} onPress={onPress} activeOpacity={0.85}>
    <View style={styles.msIcon}>
      <View style={[styles.msQ, { backgroundColor: '#f25022' }]} />
      <View style={[styles.msQ, { backgroundColor: '#7fba00' }]} />
      <View style={[styles.msQ, { backgroundColor: '#00a4ef' }]} />
      <View style={[styles.msQ, { backgroundColor: '#ffb900' }]} />
    </View>
    <Text style={styles.btnMsText}>Entrar com Microsoft 365</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btnMs: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, borderWidth: 1.5, borderColor: '#333', borderRadius: 10, paddingVertical: 14, backgroundColor: '#1e1e1e' },
  btnMsText: { color: '#ccc', fontSize: 14 },
  msIcon: { width: 16, height: 16, flexDirection: 'row', flexWrap: 'wrap', gap: 2 },
  msQ: { width: 7, height: 7 },
});

export default MicrosoftButton;
