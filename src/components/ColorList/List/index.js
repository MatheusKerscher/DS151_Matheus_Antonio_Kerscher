import React, { useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
} from "react-native";

import styles from "./style";

export default function List() {
  const [colors, setColors] = useState([]);

  function generateColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    setColors((prevColors) => [...prevColors, `rgb(${r}, ${g}, ${b})`]);
  }

  function clearColors() {
    setColors([]);
  }

  return (
    <View style={styles.flatList}>
      <TouchableOpacity onPress={() => generateColor()} style={styles.btn}>
        <Text style={styles.textBtn}>Gerar Cor</Text>
      </TouchableOpacity>

      {colors.length > 0 ? (
        <TouchableOpacity onPress={() => clearColors()} style={styles.btn}>
          <Text style={styles.textBtn}>
            Limpar {colors.length >= 2 ? "Cores" : "Cor"}
          </Text>
        </TouchableOpacity>
      ) : null}

      {colors.length == 0 ? (
        <Text style={styles.textMsg}>Clique em "Gerar Cor" para começar </Text>
      ) : null}

      <View>
        {colors.length > 1 ? (
          <Text style={styles.textInfo}>Possui scroll horizontal :)</Text>
        ) : null}
      </View>

      <SafeAreaView>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.flatListContent}
          data={colors}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View style={styles.flatListItem}>
              <Text
                style={[{ backgroundColor: item }, styles.flatListItem]}
              ></Text>
              <Text style={styles.nomeCor}>{item}</Text>
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  );
}
