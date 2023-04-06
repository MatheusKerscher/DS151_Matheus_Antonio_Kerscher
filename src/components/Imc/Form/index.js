import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";

import ResultImc from "./ResultImc";
import styles from "./style"

export default function Form() {
  const [heigth, setHeigth] = useState(null);
  const [weigth, setWeigth] = useState(null);
  const [msgImc, setMsgImc] = useState("Preencha a altura e o peso");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular IMC");

  function imcCalculator() {
    return setImc((weigth / (heigth * heigth)).toFixed(2));
  }

  function validationImc() {
    if (weigth != null && heigth != null) {
      imcCalculator();
      setHeigth(null);
      setWeigth(null);
      setMsgImc("Seu IMC é:");
      setTextButton("Calcular novamente");
      return;
    }

    setImc(null);
    setTextButton("Calcular IMC");
    setMsgImc("Preencha a altura e o peso");
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput
          onChangeText={setHeigth}
          value={heigth}
          style={styles.input}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
        />

        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
          onChangeText={setWeigth}
          value={weigth}
          style={styles.input}
          placeholder="Ex. 69.4"
          keyboardType="numeric"
        />

        <TouchableOpacity onPress={() => validationImc()} style={styles.btnCalculator}>
          <Text style={styles.textBtnCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </View>

      <ResultImc msgResultImc={msgImc} resultImc={imc} />
    </View>
  );
}
