import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CardapioScreen from './CardapioScreen';
import { useLinkTo } from '@react-navigation/native';

function PrincipalScreen(): React.JSX.Element {


return(
    <View style={styles.container}>
        <TouchableOpacity >
            <Image source={require('./assents/images/hamburguer.png')} style={styles.img} />
        </TouchableOpacity>
    </View>
);
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f0971c',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img:{
        
    },

});

export default PrincipalScreen;