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

export default function List() {
  const [urls, setUrls] = useState([]);

  function fetchData(type) {
    fetch(`https://api.${type}.com/v1/images/search`)
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
        setUrls((prevUrl) => [...prevUrl, jsonRes[0].url]);
      });
  }

  function clearImagens() {
    setUrls([]);
  }

  return (
    <View style={styles.flatList}>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => fetchData("thedogapi")}
          style={styles.btn}
        >
          <Text style={styles.textBtn}>Cachorro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => fetchData("thecatapi")}
          style={styles.btn}
        >
          <Text style={styles.textBtn}>Gato</Text>
        </TouchableOpacity>
      </View>

      {urls.length == 0 ? (
        <Text style={styles.textMsg}>Selecione qual imagem deseja gerar</Text>
      ) : null}

      {urls.length > 0 ? (
        <TouchableOpacity onPress={() => clearImagens()} style={styles.btn}>
          <Text style={styles.textBtn}>Limpar</Text>
        </TouchableOpacity>
      ) : null}

      <View>
        {urls.length > 1 ? (
          <Text style={styles.textInfo}>Possui scroll horizontal :)</Text>
        ) : null}
      </View>

      <SafeAreaView>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.flatListContent}
          data={urls}
          keyExtractor={(item) => item}
          renderItem={({ item }) =>
            urls != null || urls != undefined || urls != "" ? (
              <Image
                style={styles.imagem}
                source={{
                  uri: item,
                }}
              />
            ) : null
          }
        />
      </SafeAreaView>
    </View>
  );
}
