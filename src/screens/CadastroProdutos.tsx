import React, { useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from "axios";

const CadastroProduto:React.FC=()=>{
const[produtos, setProdutos]= useState<Produto[]>([]);
const[nome,setNome]= useState<string>('');
const[preco, setPreco]= useState<string>('');
const[ingredientes, setingredientes]=useState<string>('');
const[imagem, setImagem]=useState<any>('');


const CadastrarProduto = async ()=>{
    try{
    const formData = new FormData();
    formData.append('nome',nome);
    formData.append('preco',preco);
    formData.append('ingredientes',ingredientes);
    formData.append('imagem',{
        uri: imagem,
        type: 'image/jpeg',
        name: new Date()+ '.jpg'
    });

    const response = await axios.post('http://10.137.11.232:8000/api/produtos', formData,{
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
                    <Text style={styles.headerText}>Cadastro Produto</Text>
            </View>
            <View style={styles.form}>
                <TextInput style={styles.input}
                placeholder="Nome do Produto"
                value={nome}
                onChangeText={setNome}/>
                
                <TextInput style={styles.input}
                placeholder="Preço"
                value={preco}
                onChangeText={setPreco}/>
                 
                 <TextInput style={styles.input}
                placeholder="ingredientes"
                value={ingredientes}
                onChangeText={setingredientes} 
                multiline/>
            <View style={styles.alinhamentoImageSelecionada}>
                {imagem ? <Image source={{uri:imagem}} style={styles.imageSelecionada}/> :null}
            </View>
                <TouchableOpacity style={styles.imageButton}><Text style={styles.buttonText} onPress={selecionarImagem}>Selecionar Imagem</Text></TouchableOpacity>

                <TouchableOpacity style={styles.imageButton}><Text style={styles.buttonText} onPress={abrirCamera}>Tirar foto</Text></TouchableOpacity>

                <TouchableOpacity style={styles.imageButton}><Text style={styles.buttonText} onPress={CadastrarProduto}>Cadastro Produto</Text></TouchableOpacity>
            </View>
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
        width:150,
        height:150,
        resizeMode:'cover',
        borderRadius:550,
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
export default CadastroProduto;