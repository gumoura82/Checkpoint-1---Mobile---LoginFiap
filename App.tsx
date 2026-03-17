import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Switch,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Header from './components/Header';
import CustomInput from './components/CustomInput';
import PasswordInput from './components/PasswordInput';
import MicrosoftButton from './components/MicrosoftButton';
import Footer from './components/Footer';

// Se tiver @expo/vector-icons ou react-native-vector-icons instalado:
// import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (value: string) => {
    const isValid = /^rm\d+@fiap\.com\.br$/.test(value);
    setEmailError(value.length > 0 && !isValid ? 'E-mail inválido' : '');
    return isValid;
  };

  const validatePassword = (value: string) => {
    const isValid = value.length >= 6;
    setPasswordError(!isValid && value.length > 0 ? 'Mínimo de 6 caracteres' : '');
    return isValid;
  };

  const handleLogin = () => {
    const emailOk = validateEmail(email);
    const passOk = validatePassword(password);
    if (emailOk && passOk) {
      console.log('Login com:', email);
      // Navegar para a próxima tela
    }
  };

  const handleMicrosoft = () => {
    console.log('Login com Microsoft 365');
    // Abrir fluxo OAuth Microsoft
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1a1a1a' }}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a1a" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 20, paddingTop: 16, paddingBottom: 32 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Header />
          <Text style={{ color: '#e1001a', fontSize: 12, fontWeight: '700', letterSpacing: 1.5, marginBottom: 8 }}>PORTAL ACADÊMICO</Text>

            <Text style={{ color: '#ffffff', fontSize: 30, fontWeight: '800', lineHeight: 36, marginBottom: 10 }}>Bem-vindo{"\n"}de volta</Text>
            <Text style={{ color: '#888', fontSize: 14, marginBottom: 28 }}>
              Faça login com suas credenciais institucionais
            </Text>
          <View style={{ backgroundColor: '#242424', borderRadius: 16, padding: 20 }}>
            <CustomInput
              label="E-MAIL INSTITUCIONAL"
              value={email}
              onChangeText={(v) => { setEmail(v); validateEmail(v); }}
              placeholder="rm000000@fiap.com.br"
              error={emailError}
              icon={<Text style={{ fontSize: 16, color: '#666' }}>✉</Text>}
              keyboardType="email-address"
            />
            <View style={{ height: 8 }} />
            <PasswordInput
              label="SENHA"
              value={password}
              onChangeText={(v) => { setPassword(v); validatePassword(v); }}
              placeholder="••••••••"
              error={passwordError}
              showPassword={showPassword}
              onToggleShow={() => setShowPassword(!showPassword)}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8, marginBottom: 20 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <Switch
                  value={rememberMe}
                  onValueChange={setRememberMe}
                  trackColor={{ false: '#444', true: '#e1001a' }}
                  thumbColor={rememberMe ? '#fff' : '#aaa'}
                  ios_backgroundColor="#444"
                />
                <Text style={{ color: '#ccc', fontSize: 14 }}>Lembrar-me</Text>
              </View>
              <TouchableOpacity>
                <Text style={{ color: '#e1001a', fontSize: 14 }}>Esqueci a senha</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ backgroundColor: '#e1001a', borderRadius: 10, paddingVertical: 16, alignItems: 'center', justifyContent: 'center', marginBottom: 16 }} onPress={handleLogin} activeOpacity={0.85}>
              <Text style={{ color: '#fff', fontWeight: '700', fontSize: 14, letterSpacing: 2 }}>ENTRAR  →</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <View style={{ flex: 1, height: 1, backgroundColor: '#333' }} />
              <Text style={{ color: '#555', fontSize: 12 }}>ou</Text>
              <View style={{ flex: 1, height: 1, backgroundColor: '#333' }} />
            </View>
            <MicrosoftButton onPress={handleMicrosoft} />
          </View>
          <Footer />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default LoginScreen;