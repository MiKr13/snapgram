import React, { useState } from 'react'
import { View, Button, TextInput } from 'react-native'

const onSignUp = () => {

}

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    return (
        <View>
            <TextInput placeholder="name" onChangeText={(name) => setName(name)} value={name} />
            <TextInput placeholder="email" onChangeText={(email) => setEmail(email)} value={email} />
            <TextInput placeholder="password" secureTextEntry={true} onChangeText={(password) => setPassword(password)} value={password} />

            <Button onPress={() => onSignUp()} title="Sign up" />
        </View>
    )
}

export default Register
