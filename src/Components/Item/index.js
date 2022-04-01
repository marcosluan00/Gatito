import React, { useState } from 'react'
import { Text, View, TextInput, Button, TouchableOpacity} from 'react-native'
import Butao from '../Butao'
import CampoInteiro from '../CampoInteiro'
import styles from './styles'


export default function Item( {nome, preco, descricao, quantidade: quantidadeInicial }) {

    const [quantidade, setQuantidade] = useState(quantidadeInicial)
    const [total, setTotal] = useState(preco*quantidadeInicial);


    const atualizaTotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade);
        calculaTotal(novaQuantidade)
    }

    const calculaTotal = (novaQuantidade)=> {
        setTotal(novaQuantidade*preco);
    }


  return (
      <>
      <View style={styles.informacao} >
          {/* LISTAGEM DOS SERVIÇOS */}
      <Text style={styles.nome}> { nome } </Text>
      <Text style={styles.descricao}> { descricao } </Text>
      <Text style={styles.preco}> { 
      Intl.NumberFormat('pt-BR', {
          style:'currency', currency:'BRL'
      }).format(preco)


      }</Text>
  
      </View>

      <View style={styles.carrinho}>
      <View>
          <View style={styles.valor}>
              <Text styles={styles.descricao}> Quantidade </Text>
              <CampoInteiro valor={quantidade} acao={atualizaTotal} stylesQuantidade={styles.quantidade}/>
          </View>
          <View style={styles.valor}>
              <Text styles={styles.descricao}> Preço Total </Text>
              <Text style={styles.preco}> {
              Intl.NumberFormat('pt-BR', {
           style:'currency', currency:'BRL'
           }).format(total) } </Text>
          </View>
      </View>
      <Butao
      valor="Remover Carrinho"
      />
    </View>
      </>
  )
}
