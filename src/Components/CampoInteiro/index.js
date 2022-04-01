import React from 'react';

import { TextInput } from 'react-native'
import stylesPadrao from './styles'

export default function CampoInteiro( {valor, acao, stylesQuantidade}){

    const atualiza = (novoValor, acaoRetorno) => {
        const verificaInteiro = novoValor.match(/^[0-9]*$/)
        if(!verificaInteiro) return;

        const removeZero = novoValor.replace(/^(0)(.+)/,'$2');


        acaoRetorno(removeZero)
    }

    const numeroText = String(valor);
    return(
        <TextInput
        style={[stylesPadrao.campo, stylesQuantidade]}
        keyboardType='number-pad'
        selectTextOnFocus
        value={numeroText}
        onChangeText ={(novoValor) => {atualiza(novoValor, acao)}}
        />
    )
}