import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => (
  <View style={styles.header}>
    <View style={styles.logoContainer}>
      <Text style={styles.logoText}>FIAP</Text>
    </View>
    <View style={styles.badgeContainer}>
      <Text style={styles.badgeText}>GRADUAÇÃO</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 },
  logoContainer: { backgroundColor: '#e1001a', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 4 },
  logoText: { color: '#fff', fontWeight: '800', fontSize: 16, letterSpacing: 1 },
  badgeContainer: { borderWidth: 1, borderColor: '#555', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 4 },
  badgeText: { color: '#aaa', fontSize: 11, letterSpacing: 1.5 },
});

export default Header;
