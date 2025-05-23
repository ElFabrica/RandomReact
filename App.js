import React, { useState } from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"

function App() {
  
  return (

    <View style={styles.conteiner}>
      <ScrollView >
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box4}></View>
      <View style={styles.box2}></View>
    </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({

  conteiner: {
    flex: 1,
  },
  box1:{

    height: 250,
    backgroundColor: "red",

  },
  box2:{

    height: 250,
    backgroundColor: "green",
    
  },
  box3:{

    height: 250,
    backgroundColor: "yellow",
    
  },
  box4:{

    height: 250,
    backgroundColor: "blue",
    
  }
})

export default App