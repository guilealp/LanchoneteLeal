import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function LoginScreen(): JSX.Element {  

    const[email,setEmail]= useState("");
    const[password, setPassword]=useState("");
    function login(){
        const dados ={
            email: email,
            password:password,
        }
        console.log(dados);
        
    }
    return(
        <View style={styles.container}>
            <Image resizeMode="contain" 
            source={require('./assents/images/logotipo.png')} style={styles.logo}/>
            <View style={styles.card}>
                <Text style={styles.title} >LOGIN</Text>
                <TextInput placeholder="E-mail" 
                placeholderTextColor={"black"} style={styles.input} onChangeText={(textEmail)=> setEmail(textEmail)}/>

                <TextInput placeholder="Senha" 
                placeholderTextColor={"black"} style={styles.input} onChangeText={(textPassword)=> setPassword(textPassword)} secureTextEntry/>
                <TouchableOpacity style={styles.buttom} onPress={()=>{login()}}>
                    <Text style={styles.buttomText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity >
                    <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={styles.forgotPassword}>Não possui conta? Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0702fe'
    },
    logo:{
        width:80,
        height:80,
        marginBottom:20,
        marginTop:-150
    },
    card:{
        backgroundColor:"#9468f8",
        width:300,
        borderRadius:10,
        padding:20,
        elevation:3,
        shadowColor:"rgba(0,0,0,0.3)",
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.8,
        shadowRadius:2,
    },
    title:{
        textAlign: 'center',
        color:"black",
        fontSize:25,
        fontWeight:'bold',
        marginBottom:20,
    },
    input:{
        backgroundColor:'#c084ff',
        height:40,
        marginBottom:20,
        borderRadius:15,
        paddingHorizontal:10,
        borderWidth:1,
        borderColor:"#a0fcf3"
        
    },
    buttom:{
        backgroundColor:"white",
        borderRadius:30,
        height:40
    },
    buttomText:{
        color:"black",
        textAlign:"center",
        fontSize:16,
        lineHeight:40
    },
    forgotPassword:{
        color:'blue',
        textAlign:"center",
        marginTop:10
    }

    

});

export default LoginScreen;