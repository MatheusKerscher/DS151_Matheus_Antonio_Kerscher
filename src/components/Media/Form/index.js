import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Keyboard,
} from "react-native";

import styles from "./style";
import ResultMedia from "./ResultMedia";
import MediaService from "../../../services/mediaService";
import db from "../../../services/dbService";

export default function Form() {
  const [nome, setNome] = useState(null);
  const [nota1, setNota1] = useState(null);
  const [nota2, setNota2] = useState(null);
  const [msgMedia, setMsgMedia] = useState("Insira as duas notas");
  const [media, setMedia] = useState(null);
  const [textButton, setTextButton] = useState("Calcular Média");

  function mediaCalculator() {
    Keyboard.dismiss();

    let calculatedMedia = ((parseFloat(nota1) + parseFloat(nota2)) / 2).toFixed(
      2
    );

    setMedia(calculatedMedia);

    const mediaObj = {
      nome: nome.trim(),
      media: calculatedMedia,
    };

    MediaService.create(mediaObj)
      .then((insertId) => {
        console.log("Registro salvo com sucesso! ID: ", insertId);
      })
      .catch((error) => {
        console.error("Erro ao salvar o registro:", error);
      });

    MediaService.getAll()
      .then((results) => {
        console.log("Registros encontrados:");
        console.log("┌────────┬────────────┬───────┐");
        console.log("│   ID   │   Nome     │ Média │");
        console.log("├────────┼────────────┼───────┤");
        results.forEach((row) => {
          console.log(
            `│ ${row.id.toString().padEnd(6)} │ ${row.nome.padEnd(
              10
            )} │ ${row.media.toString().padEnd(4)} │`
          );
        });
        console.log("└─────────┴────────────┴───────┘");
      })
      .catch((error) => {
        console.error("Erro ao obter os registros:", error);
      });
  }

  function validationMedia() {
    if (nota2 != null && nota1 != null) {
      mediaCalculator();
      setNome(null);
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
        <Text style={styles.formLabel}>Nome</Text>
        <TextInput
          onChangeText={setNome}
          value={nome}
          style={styles.input}
          placeholder="Ex. Fulano"
        />

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

        <TouchableOpacity
          onPress={() => validationMedia()}
          style={styles.btnCalculator}
        >
          <Text style={styles.textBtnCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </View>

      <ResultMedia msgResultMedia={msgMedia} resultMedia={media} />
    </View>
  );
}
