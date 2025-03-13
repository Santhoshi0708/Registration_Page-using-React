import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const isValidPassword = (password) => {
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return password.length >= 8 && hasLetter && hasNumber && hasSpecialChar;
  };

  const onSubmitForm = () => {
    if (!name.trim() || !password.trim() || !confirmPassword.trim()) {
      Alert.alert("Error", "All fields are required");
      return;
    }

    if (!isValidPassword(password)) {
      Alert.alert("Error", "Password must be at least 8 characters long and include a letter, a number, and a special character!");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }

    Alert.alert('Registration Successful', `Welcome, ${name}!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>Registration</Text>

      <View style={styles.form}>
        <View style={styles.row}>
          <Text style={styles.label}>User Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={name}
            onChangeText={(value) => setName(value)}
            returnKeyType="next"
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            value={password}
            secureTextEntry={true}
            onChangeText={(value) => setPassword(value)}
            returnKeyType="next"
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Confirm Password:</Text>
          <TextInput
            style={styles.input}
            placeholder="Re-enter Password"
            value={confirmPassword}
            secureTextEntry={true}
            onChangeText={(value) => setConfirmPassword(value)}
            returnKeyType="done"
            onSubmitEditing={onSubmitForm} 
          />
        </View>

        <Button title="Register" onPress={onSubmitForm} color="blue" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'cyan',
  },
  textstyle: {
    color: 'blue',
    fontSize: 40,
    marginBottom: 30,
  },
  form: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
    width: 130,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
});
