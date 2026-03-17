import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => (
  <>
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        Não tem acesso?{' '}
        <Text style={styles.footerLink}>Fale com a secretaria</Text>
      </Text>
    </View>
    <Text style={styles.fiapFooter}>
      FIAP — Faculdade de Informática e Administração Paulista
    </Text>
  </>
);

const styles = StyleSheet.create({
  footer: { marginTop: 28, alignItems: 'center' },
  footerText: { color: '#555', fontSize: 13 },
  footerLink: { color: '#e1001a' },
  fiapFooter: { textAlign: 'center', color: '#444', fontSize: 11, marginTop: 12 },
});

export default Footer;
