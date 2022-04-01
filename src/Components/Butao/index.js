import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import funcaoEstilo from './styles'

export default function Butao({ pequeno=false, invertido=false, valor, acao, estilos}) {
    const estiloPadrao = funcaoEstilo(pequeno, invertido)
  return (
    <TouchableOpacity
    style={[estiloPadrao.botao, estilos]}
    onPress={acao}
    >
        <Text 
        style={estiloPadrao.valor}
        > {valor} </Text>
    </TouchableOpacity>
  )
}