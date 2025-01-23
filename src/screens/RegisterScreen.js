import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async () => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
       //anadimos 2 validaciones
        if (!email.includes("@")) {
            setError("Por favor, ingresa un email válido.");
            return;
        }
        //if (!passwordRegex.test(password)){
           // setError("la contrasena no cumple las condiciones");
          //  return;
       // }
        if(password!=password2){
            setError("La contrasena no coincide");
            return;

        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            navigation.replace('Home');
        } catch (error) {
            setError('Error al registrarse: ' + error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text h3 style={styles.title}>Registro</Text>
            <Input
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
            />
            <Input
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Input
                placeholder="Repetir contraseña"
                value={password2}
                onChangeText={setPassword2}
                secureTextEntry
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <Button
                title="Registrarse"
                onPress={handleRegister}
                containerStyle={styles.button}
            />
            <Button
                title="Volver al Login"
                type="outline"
                onPress={() => navigation.navigate('Login')}
                containerStyle={styles.button}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        marginBottom: 30,
    },
    button: {
        marginVertical: 10,
    },
    error: {
        color: 'red',
        textAlign: 'center',
        marginBottom: 10,
    },
});