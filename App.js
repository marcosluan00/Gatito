import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Servicos from './src/pages/Servicos';
import React from 'react'

import Carrinho from './src/pages/Carrinho'
import Routes from './src/routes';

import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import TelaPadrao from './src/Components/TelaPadrao';


export default function App() {
  return (
    <TelaPadrao>
    <Routes/>
    </TelaPadrao>
  );
}


