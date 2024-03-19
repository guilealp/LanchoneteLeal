import React from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function  CardapioScreen(): React.JSX.Element{
    interface Item{
        id:string;
        nome: string;
        descricao:string;
        valor:string;
        images:any;
    }

    const dados: Item[]=[
        {id:'1',nome:"x-burguer",descricao:'pão,hamburguer,queijo,gergelin',valor:'15,00',images:require('./assents/images/queijo.webp')},
        {id:'2',nome:"x-egg",descricao:'pão,hamburguer,queijo,ovo,gergelin',valor:'16,00',images:require('./assents/images/queijo.webp')},
        {id:'3',nome:"x-bacon",descricao:'pão,hamburguer,queijo,bacon,gergelin',valor:'16,00',images:require('./assents/images/queijo.webp')},
        {id:'4',nome:"x-tudo",descricao:'pão,hamburguer,queijo,ovo,presunto,bacon,gergelin',valor:'25,00',images:require('./assents/images/queijo.webp')},
        {id:'5',nome:"x-quase tudo",descricao:'pão,hamburguer,queijo,presunto,bacon,gergelin',valor:'22,00',images:require('./assents/images/queijo.webp')},
        {id:'6',nome:"x-queijo",descricao:'pão,hamburguer,queijo,gergelin,catupiry',valor:'17,00',images:require('./assents/images/queijo.webp')},
        {id:'7',nome:"bauru",descricao:'pão,presunto,queijo,tomate',valor:'10,00',images:require('./assents/images/queijo.webp')},
        {id:'8',nome:"crepe doce",descricao:'massa e recheio de nutela',valor:'10,00',images:require('./assents/images/queijo.webp')},
        {id:'9',nome:"burrito",descricao:'tortilha, carne,tomate, alface',valor:'12,00',images:require('./assents/images/queijo.webp')},
        {id:'10',nome:"taco",descricao:'tortilha,carne,molho especial,pimenta ',valor:'14,00',images:require('./assents/images/queijo.webp')},
        {id:'11',nome:"pastel de carne",descricao:'muita carne',valor:'6,00',images:require('./assents/images/queijo.webp')},
        {id:'12',nome:"pastel de queijo",descricao:'muito queijo',valor:'6,00',images:require('./assents/images/queijo.webp')},
        {id:'13',nome:"pastel de frango",descricao:'muito frango',valor:'6,00',images:require('./assents/images/queijo.webp')},
        {id:'14',nome:"pastel de carne com queijo",descricao:'carne e queijo no pastel',valor:'8,00',images:require('./assents/images/queijo.webp')},
        {id:'15',nome:"pastel de frango com queijo",descricao:'frango e queijo no pastel',valor:'8,00',images:require('./assents/images/queijo.webp')},
    ];
    

    const renderItem = ({ item }:{item:Item})=>(
        <TouchableOpacity style={styles.item}> 
            <Text>{item.nome}</Text>
            <Text>{item.descricao}</Text>
            <Text>{item.valor}</Text>
            <Image source={item.images} style={styles.img}/>
        </TouchableOpacity>
    );
    return(
        <View>
                <StatusBar backgroundColor="#f68619" barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.headerText}>Cardapio</Text>
            </View>
            <FlatList showsVerticalScrollIndicator={false} data={dados} renderItem={renderItem} keyExtractor={(item)=>item.id}/>
                
<View style={styles.footer}>
                <TouchableOpacity>
                <Image source={require('./assents/images/home.png')} style={styles.footerIcon}/>
                </TouchableOpacity>

                <TouchableOpacity>
                <Image source={require('./assents/images/orders.png')} style={styles.footerIcon}/>
                </TouchableOpacity>
                
                <TouchableOpacity>
                <Image source={require('./assents/images/profile.png')} style={styles.footerIcon}/>
                </TouchableOpacity>

            </View>
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    item:{
        backgroundColor:'#cc640d',
        padding:20,
        marginVertical:8,
        marginHorizontal:16
    },
    header:{
        backgroundColor: "#f68619",
        alignItems:'center',
        paddingVertical:40
    },
    headerText:{   
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    },
    footer:{
        borderTopWidth:0.2,
        backgroundColor:'#f68619',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingVertical:10
    },
    footerIcon:{
        width:30,
        height:30
    },
    img:{
        width:10,
        height:10
    }
});

export default CardapioScreen;