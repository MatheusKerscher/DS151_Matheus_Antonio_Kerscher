import React, { useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  Image,
} from "react-native";

import styles from "./style";

export default function GalerryList() {
  const [imgs, setImgs] = useState([]);

  function fetchData() {
    setImgs([]);
    for (let i = 0; i < 10; i++) {
      fetch("https://api.thedogapi.com/v1/images/search")
        .then(
          (res) => {
            if (res.ok) {
              return res.json();
            }

            throw new Error("Falha ao buscar gatos");
          },
          (networkError) => console.log(networkError.message)
        )
        .then((jsonRes) => {
          setImgs((prevUrl) => [...prevUrl, jsonRes[0]]);
        });
    }
  }

  function geraDimenssoes() {
    return Math.floor(Math.random() * 201) + 100
  }

  return (
    <View style={styles.flatList}>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => fetchData()} style={styles.btn}>
          <Text style={styles.textBtn}>Carregar Galeria</Text>
        </TouchableOpacity>
      </View>

      <View>
        {imgs.length > 1 ? (
          <Text style={styles.textInfo}>Possui scroll horizontal :)</Text>
        ) : null}
      </View>

      <SafeAreaView>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.flatListContent}
          data={imgs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>
            imgs != null || imgs != undefined || imgs != "" ? (
              <Image
                style={[
                  styles.imagem,
                  {
                    height: item.height > 300 ? geraDimenssoes() : item.height,
                    width: item.width > 300 ? geraDimenssoes() : item.width,
                  },
                ]}
                source={{
                  uri: item.url,
                }}
              />
            ) : null
          }
        />
      </SafeAreaView>
    </View>
  );
}
