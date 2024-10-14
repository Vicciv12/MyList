import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';
import { style } from "./styles";
import Logo from '../../assets/logo.png'
import { MaterialIcons } from '@expo/vector-icons'
import { themas } from "../../global/themes";
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function getLogin() {
        try{
            if (!email || !password) {
                return Alert.alert('Atenção', 'Informe os campos obrigatórios!')
            }

            Alert.alert('Logado com Sucesso!')

        }catch (error){
            console.log(error)
        }
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>Bem vindo de volta!</Text>
            </View>
            <View style={style.boxMid}>
                <Text style={style.titleInput}>ENDEREÇO DE E-MAIL:</Text>
                <View style={style.BoxInput}>
                    <TextInput
                        style={style.input}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <MaterialIcons
                        name='email'
                        size={20}
                        color={themas.colors.gray}              
                    />
                </View>
                <Text style={style.titleInput}>SENHA:</Text>
                <View style={style.BoxInput}>
                    <TextInput
                        style={style.input}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <MaterialIcons
                        name='remove-red-eye'
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>
            </View>
            <View style={style.boxBotton}>
                <TouchableOpacity style={style.button} onPress={()=> getLogin()}>
                    <Text style={style.TextButton} >Entrar</Text>
                </TouchableOpacity>
            </View>
            <Text>Não tem conta? Crie agora</Text>
        </View>
    )
}