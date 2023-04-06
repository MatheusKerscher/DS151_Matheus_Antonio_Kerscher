import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";

import styles from "./style"
import ResultMedia from "./ResultMedia";

export default function Form() {
  const [nota1, setNota1] = useState(null);
  const [nota2, setNota2] = useState(null);
  const [msgMedia, setMsgMedia] = useState("Insira as duas notas");
  const [media, setMedia] = useState(null);
  const [textButton, setTextButton] = useState("Calcular Média");

  function mediaCalculator() {
    return setMedia(((parseFloat(nota1) + parseFloat(nota2)) / 2).toFixed(2));
  }

  function validationMedia() {
    if (nota2 != null && nota1 != null) {
      mediaCalculator();
      setNota1(null);
      setNota2(null);
      setMsgMedia("Sua média é:");
      setTextButton("Calcular novamente");
      return;
    }

    setMedia(null);
    setTextButton("Calcular Média");
    setMsgMedia("Insira as duas notas");
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Nota 1</Text>
        <TextInput
          onChangeText={setNota1}
          value={nota1}
          style={styles.input}
          placeholder="Ex. 92"
          keyboardType="numeric"
        />

        <Text style={styles.formLabel}>Nota 2</Text>
        <TextInput
          onChangeText={setNota2}
          value={nota2}
          style={styles.input}
          placeholder="Ex. 75"
          keyboardType="numeric"
        />

        <TouchableOpacity onPress={() => validationMedia()} style={styles.btnCalculator}>
          <Text style={styles.textBtnCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </View>

      <ResultMedia msgResultMedia={msgMedia} resultMedia={media} />
    </View>
  );
}
