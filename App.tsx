import React from 'react';
import CardapioScreen from './src/CardapioScreen';
import LoginScreen from './src/LoginScreen';
import CadastroProduto from './src/screens/CadastroProdutos';
import CadastroCliente from './src/screens/CadastroCliente';
import CarrinhoScreen from './src/CarrinhoScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



function App(): React.ReactElement{
const Stack = createStackNavigator();
  return (
  
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Cardapio' component={CardapioScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Carrinho' component={CarrinhoScreen} options={{headerShown: false}}/>
        <Stack.Screen name='CadastroProduto' component={CadastroProduto} options={{headerShown: false}}/>
        <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name='CadastroCliente' component={CadastroCliente} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
