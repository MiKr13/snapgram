import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from 'declarations/RouteStack'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

type Props = StackScreenProps<RootStackParamList, 'Landing'>

const Landing = ({ route, navigation }: Props) => {
    return (
        <View style={styles.container}>
            <Button title="Register" onPress={() => navigation.navigate("Register")} />
            <Button title="Login" onPress={() => navigation.navigate("Login")} />
            <Text>Yo sup boi</Text>
        </View>
    )
}

export default Landing
