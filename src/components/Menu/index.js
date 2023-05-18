import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./style";

import Title from "../Title";

export default function Menu({ navigation }) {
  return (
    <View>
      <Title titulo="ATIVIDADES SEMANAIS" />

      <View style={styles.container}>
        <View style={styles.col}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Calculo do IMC")}
            style={styles.btn}
          >
            <Text style={styles.textBtn}>Calcular IMC</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.col}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Calculo de Média")}
            style={styles.btn}
          >
            <Text style={styles.textBtn}>Calcular Média</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.col}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Gerar Cores")}
            style={styles.btn}
          >
            <Text style={styles.textBtn}>Gerar Cores</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.col}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Gerar Imagem")}
            style={styles.btn}
          >
            <Text style={styles.textBtn}>Gerar Imagem</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.col}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Galeria")}
            style={styles.btn}
          >
            <Text style={styles.textBtn}>Galeria</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.col}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Filmes")}
            style={styles.btn}
          >
            <Text style={styles.textBtn}>Filmes</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.col}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Autenticação")}
            style={styles.btn}
          >
            <Text style={styles.textBtn}>Autenticação</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
