import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

import Butao from '../Butao'

export default function StatusCarrinho({ total }) {
  return (
    <View style={styles.conteudo}>
      <View style={styles.total}>
          <Text style={styles.descricao}>Total do carrinho </Text>
          <Text style={styles.valor}>
              {
                  Intl.NumberFormat('pt-br', {
                      style:'currency', currency: 'BRL'
                  }).format(total)
              }
          </Text>
          
      </View>
      <View style={styles.botao}>
              <Butao
              valor='Concluir Pedido'
              invertido
              />
          </View>
    </View>
  )
}