import React from "react";
import {  SafeAreaView, KeyboardAvoidingView, Platform, StatusBar } from "react-native";

import styles, { cores } from '../../styles'
import estilo from './styles'

export default function TelaPadrao({ children }) {
  return (<>
    <SafeAreaView style={estilo.ajusteTela}>
    <StatusBar backgroundColor={cores.roxo} />
    <KeyboardAvoidingView 
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.preencher}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
    <SafeAreaView style={estilo.ajusteTelaBaixo} />
  </>
  )
}