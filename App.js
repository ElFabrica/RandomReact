import React, {useState} from "react"
import {View, Text, TextInput, StyleSheet} from "react-native"

function App(){
  const [nome, setNome] = useState('') 

  function pegaNome(texto) {
    if (!texto) {
    setNome("")  
    }
    setNome(`Bem vindo ${texto}`)
    
  }
  
  return(
    
    <View sytle ={styles.conteiner}>
      
      <TextInput style = {styles.input} onChangeText={(text) => pegaNome(text)}> </TextInput>

      <Text style = {styles.text}>{nome}</Text>

    </View>

    
  )}
const styles = StyleSheet.create({
  conteiner:{
  flex: 1,
  paddingTop: 40,
  marginTop: 40

  },
  input:{
    height: 55,
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    fontSize: 20
  },
  text:{
    textAlign: "center",
    fontSize: 25
  }
})

export default App