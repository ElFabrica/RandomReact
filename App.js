import React, { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

function App() {
  const [pessoaTotal, statePessoasTotal] = useState(10)
  const [pessoas, statepessoas] = useState(0)

  function adicionar() {
    if (pessoas == pessoaTotal) {
      return
    }
    statepessoas(pessoas + 1)
  }

  function diminuir() {
    if (pessoas == 0) {
      return
    }
    statepessoas(pessoas - 1)

  }
  return (

    <View style={styles.conteiner}>
      <Text style={styles.title}>Pessoas no restaurante</Text>

      <View style={styles.qtdPessoas}>
        <Text style={{ color: "#FFFFFF", fontSize: 30, fontWeight: "bold" }}>{pessoas}</Text>
      </View>

      <Text style= {pessoas == pessoaTotal ? styles.textSucess : styles.textFail}>O restaurante está no seu limite de pessoas</Text>

      <View style={styles.footer}>
        <View>
          <TouchableOpacity style={styles.btn} onPress={adicionar}>
            <Text style={styles.textBtn}>Adicionar</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btn} onPress={diminuir}>
          <Text style={styles.textBtn}>Remover</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({

  conteiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10
  },

  footer: {
    flexDirection: "row",
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  qtdPessoas: {
    color: "#FFFFFF",
    backgroundColor: "#141414",
    width: 60,
    height: 80,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"

  },
  textFail:{
    display: "none"
  },
  textSucess:{
    backgroundColor: "#FCB135",
    borderRadius: 10,
    padding: 8
  },

  btn: {
    backgroundColor: "#007AFE",
    padding: 16,
    borderRadius: 10
  },
  btnOpacity: {
    backgroundColor: "#007AFE",
    padding: 16,
    borderRadius: 10,
    opacity: 40

  },
  textBtn: {
    color: "#FFFFFF",
    fontSize: 20
  }
})

export default App