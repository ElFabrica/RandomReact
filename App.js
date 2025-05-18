import React, {useState} from "react"
import {View, Text, TextInput, StyleSheet, Button} from "react-native"

function App(){
  const [nome, setNome] = useState('')
  const [input, setInput] = useState('')

  function entrar() {
    if(input ===""){
      alert("DIGITE SEU NOME!!! ")
      return
    }
    setNome(`Bem vindo: ${input}`)
    
  }
  return(
    
    <View sytle = {styles.conteiner}>
      
      <TextInput style = {styles.input} onChangeText={(text) => setInput(text)}> </TextInput>

      <Text style = {styles.text}>{nome}</Text>
      <Button title="Entrar" onPress={ entrar }></Button>
    </View>

    
  )}
const styles = StyleSheet.create({

  conteiner:{
    flex: 1
    
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