import React, { useState } from "react";
import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from "axios";

const CadastroCliente:React.FC=()=>{
const[Cliente, setClientes]= useState<Cliente[]>([]);
const[nome,setNome]= useState<string>('');
const[email, setEmail]= useState<string>('');
const[telefone, setTelefone]=useState<string>('');
const[cpf, setCpf]= useState<string>('');
const[endereco, setEndereco]=useState<string>('');
const[password, setPassword]=useState<string>('');
const[foto, setImagem]=useState<any>('');


const CadastrarCliente = async ()=>{
    try{
    const formData = new FormData();
    formData.append('nome',nome);
    formData.append('email',email);
    formData.append('telefone',telefone);
    formData.append('cpf',cpf);
    formData.append('endereco',endereco);
    formData.append('password',password);
    formData.append('foto',{
        uri: foto,
        type: 'image/jpeg',
        name: new Date()+ '.jpg'
    });

    const response = await axios.post('http://10.137.11.232:8000/api/cliente', formData,{
        headers:{
            'Content-Type':'multipart/form-data'
        }
    });
}   catch(error){
    console.log(error);
    
}
}

const abrirCamera=()=>{
    const options={
        mediaType: 'photo',
        includeBase64:false,
        maxHeight:2000,
        maxWidth:2000
    }
    launchCamera(options,response=>{
        if(response.didCancel){
            console.log('cancelado pelo usuario');           
        } else if (response.error){
            console.log('erro ao abrir a camera');
        }else{
            let imageUri =response.uri ||response.assets?.[0]?.uri;
            setImagem(imageUri);
            console.log(imageUri);
            
        }
    });
}

const selecionarImagem =()=>{
    const options={
        mediaType: 'photo',
        includeBase64:false,
        maxHeight:2000,
        maxWidth:2000
    };

    launchImageLibrary(options,(response)=>{
        if(response.didCancel){
            console.log('cancelado pelo usuario');           
        } else if (response.error){
            console.log('erro ao abrir a camera');
        }else{
            let imageUri =response.uri ||response.assets?.[0]?.uri;
            setImagem(imageUri);
            console.log(imageUri);
            
        }
    });
}

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#9468f8' barStyle='light-content'/>
            <View style={styles.header}>
                <Image source={require("../assents/images/logotipo.png")} style={styles.imgHeader}/>
                    <Text style={styles.headerText}>Top Food</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={true}>
            <View style={styles.form}>
                <TextInput style={styles.input}
                placeholder="Nome do Produto"
                value={nome}
                onChangeText={setNome}/>
                
                <TextInput style={styles.input}
                placeholder="email"
                value={email}
                onChangeText={setEmail}/>
                 
                 <TextInput style={styles.input}
                placeholder="telefone"
                value={telefone}
                onChangeText={setTelefone} 
                multiline/>

<TextInput style={styles.input}
                placeholder="cpf"
                value={cpf}
                onChangeText={setCpf} 
                multiline/>

                <TextInput style={styles.input}
                placeholder="endereco"
                value={endereco}
                onChangeText={setEndereco} 
                multiline/>

                <TextInput style={styles.input}
                placeholder="password"
                value={password}
                onChangeText={setPassword} 
                multiline/>

            <View style={styles.alinhamentoImageSelecionada}>
                {foto ? <Image source={{uri:foto}} style={styles.imageSelecionada}/> :null}
            </View>
                <TouchableOpacity style={styles.imageButton}><Text style={styles.buttonText} onPress={selecionarImagem}>Selecionar Imagem</Text></TouchableOpacity>

                <TouchableOpacity style={styles.imageButton}><Text style={styles.buttonText} onPress={abrirCamera}>Tirar foto</Text></TouchableOpacity>

                <TouchableOpacity style={styles.imageButton}><Text style={styles.buttonText} onPress={CadastrarCliente}>Cadastro Produto</Text></TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#9468f8'
    },
    header:{
        backgroundColor:'#9468f8',
        paddingVertical:10,
        alignItems:'center'
    },
    headerText:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
    },
    form:{
        padding:10,
        backgroundColor:'#0702fe',
        marginBottom:10
    },
    input:{
        height:40,
        borderColor:'#0702fe',
        borderWidth:1,
        marginBottom:10,
        paddingHorizontal:10,
        borderRadius:10,
        backgroundColor:'#c084ff'
    },
    imageButton:{
        backgroundColor:'#c084ff',
        padding:10,
        borderRadius:5,
        alignItems:'center',
        marginBottom:10,
        borderColor:'white'
    },
    imageButtonText:{
        color:'white',
        fontWeight:'bold'
    },
    imageSelecionada:{
        width:200,
        height:200,
        resizeMode:'cover',
        borderRadius:5,
        marginBottom:10,
    },
    alinhamentoImageSelecionada:{
        alignItems:'center'
    },
    button:{
        backgroundColor:'red',
        padding:10,
        borderRadius:5,
        alignItems:'center'
    },
    buttonText:{
        color:'white',
        fontWeight:'bold'
    },
    imgHeader: {
        width: 150,
        height: 150,
    }
});
export default CadastroCliente;