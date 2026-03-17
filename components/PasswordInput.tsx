import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

interface PasswordInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  error?: string;
  showPassword: boolean;
  onToggleShow: () => void;
}

const PasswordInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  showPassword,
  onToggleShow,
}: PasswordInputProps) => (
  <>
    <Text style={styles.fieldLabel}>{label}</Text>
    <View style={[styles.inputWrap, error ? styles.inputError : styles.inputDefault]}>
      <Text style={styles.icon}>🔒</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#555"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={!showPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TouchableOpacity onPress={onToggleShow}>
        <Text style={styles.icon}>{showPassword ? '🙈' : '👁'}</Text>
      </TouchableOpacity>
    </View>
    {error ? <Text style={styles.errorText}>{error}</Text> : <Text style={styles.hintText}>Mínimo de 6 caracteres</Text>}
  </>
);

const styles = StyleSheet.create({
  fieldLabel: { color: '#aaa', fontSize: 11, fontWeight: '700', letterSpacing: 1.2, marginBottom: 8 },
  inputWrap: { flexDirection: 'row', alignItems: 'center', borderWidth: 1.5, borderRadius: 10, paddingHorizontal: 14, paddingVertical: 12, gap: 10, marginBottom: 4, backgroundColor: '#1a1a1a' },
  inputDefault: { borderColor: '#333' },
  inputError: { borderColor: '#e1001a' },
  input: { flex: 1, color: '#ccc', fontSize: 14, padding: 0 },
  icon: { fontSize: 16, color: '#666' },
  errorText: { color: '#e1001a', fontSize: 12, marginBottom: 8 },
  hintText: { color: '#e1001a', fontSize: 12, marginBottom: 8 },
});

export default PasswordInput;
