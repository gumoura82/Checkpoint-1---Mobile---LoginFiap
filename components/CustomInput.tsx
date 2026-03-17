import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface CustomInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  error?: string;
  icon?: React.ReactNode;
  secureTextEntry?: boolean;
  rightIcon?: React.ReactNode;
  keyboardType?: 'default' | 'email-address';
}

const CustomInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  icon,
  secureTextEntry,
  rightIcon,
  keyboardType = 'default',
}: CustomInputProps) => (
  <>
    <Text style={styles.fieldLabel}>{label}</Text>
    <View style={[styles.inputWrap, error ? styles.inputError : styles.inputDefault]}>
      {icon}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#555"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {rightIcon}
    </View>
    {error ? <Text style={styles.errorText}>{error}</Text> : null}
  </>
);

const styles = StyleSheet.create({
  fieldLabel: { color: '#aaa', fontSize: 11, fontWeight: '700', letterSpacing: 1.2, marginBottom: 8 },
  inputWrap: { flexDirection: 'row', alignItems: 'center', borderWidth: 1.5, borderRadius: 10, paddingHorizontal: 14, paddingVertical: 12, gap: 10, marginBottom: 4, backgroundColor: '#1a1a1a' },
  inputDefault: { borderColor: '#333' },
  inputError: { borderColor: '#e1001a' },
  input: { flex: 1, color: '#ccc', fontSize: 14, padding: 0 },
  errorText: { color: '#e1001a', fontSize: 12, marginBottom: 8 },
});

export default CustomInput;
