import React from "react";
import { Text, FlatList, SafeAreaView, KeyboardAvoidingView, Platform } from "react-native";
import Item from "../../Components/Item";
import styles from '../../styles'
import TelaPadrao from "../../Components/TelaPadrao";
import StatusCarrinho from '../../Components/StatusCarrinho'

const servicos = [
    {
        id:1,
        nome:'Banho',
        preco: 80,
        descricao: "Banho para cachorro",
        quantidade: 1
    },
    {
        id:2,
        nome:'Vacina V2',
        preco: 100,
        descricao: "Uma dose da vacina v4. Seu gato precisa de duas",
        quantidade: 2
    },
    {
        id:3,
        nome:'Vacina Antirrábica',
        preco: 70,
        descricao: "Uma dose da vacina v4. Seu gato precisa uma anualmente",
        quantidade: 1
    }
]

export default function Carrinho() {
    const total = servicos.reduce((soma, { preco, quantidade}) => soma+(preco*quantidade), 0)

    return (
    <>

    <StatusCarrinho total={total}/>
    
    <FlatList
    data={servicos}
    removeClippedSubviews={false}
    renderItem={( { item } ) => 
        <Item {...item}/>}
    keyExtractor={({ id }) => String(id)}
    />
    </>
    )
}