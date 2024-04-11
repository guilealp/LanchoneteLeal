import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";




interface Produtos {
    id: string;
    nome: string;   
    descricao: string;
    valor: string;
    images: any;
}



function CardapioScreen(): React.JSX.Element {
    
    const [produtos, setProdutos] = useState<Produtos[]>([]);




    useEffect(() => {
        listarProdutos();
    }, []);




    const listarProdutos = async () => {
        try {
            const response = await axios.get('http://10.137.11.209:8000/api/produtos');
            if (response.status === 200) {
                setProdutos(response.data); // Set the state with the correct data
                // console.log(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const [count, setCount] = useState(0);



    const renderItem = ({ item }: { item: Produtos }) => (
        <TouchableOpacity style={styles.item} 
        activeOpacity={0.7}
        onPress={() => {
          setCount(count + 1)
        }}>
            <Text style={styles.tituloCardapio}>{item.nome}</Text>
            <Text style={styles.descricao}>{item.descricao}</Text>
            <Text style={styles.preco}>{item.valor}</Text>
          { /* <Image source={item.images} style={styles.img} />  */}
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#9468f8" barStyle="light-content" />
            <View style={styles.header}>
            <TouchableOpacity style={styles.limpar} 
        activeOpacity={0.7}
        onPress={() => {
          setCount(count - count)
        }}>
            <Text>LIMPAR CARRINHO</Text>
        </TouchableOpacity>
                <Image source={require('./assents/images/logotipo.png')} style={styles.imgHeader} />
                <Text style={styles.headerText}>Cardapio</Text>
            </View>
                <FlatList showsVerticalScrollIndicator={false} data={produtos} renderItem={renderItem} keyExtractor={(item) => item.id} />
            
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image source={require('./assents/images/home.png')} style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.itemCarrinho}>{count}</Text>
                    <Image source={require('./assents/images/carrinho.png')} style={styles.footerIcon} />              
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('./assents/images/orders.png')} style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('./assents/images/profile.png')} style={styles.footerIcon} />
                </TouchableOpacity>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0702fe'
    },
    item: {
        backgroundColor: '#c084ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 15
    },
    header: {
        backgroundColor: "#9468f8",
        alignItems: 'center',
        paddingVertical: 20
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: '#9468f8',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 25

    },
    footerIcon: {
        width: 30,
        height: 30
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 20
    },
    tituloCardapio: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    },
    imgHeader: {
        width: 150,
        height: 150,
    },
    preco: {
        fontWeight: "bold",
        left: 270,
        fontSize: 25,
        color: 'black',
    },
    descricao: {
        fontSize: 15,
        color: 'black'
    },
    itemCarrinho:{
        backgroundColor:'red',
        borderRadius:100,
        textAlign:'center',
        width:20,

    },
    limpar:{
        backgroundColor: '#c084ff',
        padding: 20,
        marginVertical: 5,
        marginHorizontal: 16,
        borderRadius: 15
    }
});

export default CardapioScreen;