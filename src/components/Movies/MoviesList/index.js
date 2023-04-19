import React, { useState } from "react";
import {
  FlatList,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";

import styles from "./style";
import { SelectList } from "react-native-dropdown-select-list";

import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function MoviesList() {
  const [generos, setGeneros] = useState([]);
  const [filmes, setFilmes] = useState([]);
  const [open, setOpen] = useState(false);
  const [filmeDetalhes, setFilmeDetalhes] = useState(null);

  let baseUrl = "https://api.themoviedb.org/3/";
  const token = "11155a0b380f70ca72f7a248861532b5";

  function fetchData(type, id) {
    let params;

    if (type == "discover") {
      setFilmes([]);
      baseUrl += "discover/movie";

      params = new URLSearchParams({
        api_key: token,
        language: "pt-BR",
        sort_by: "popularity.desc",
        include_adult: false,
        include_video: false,
        page: 1,
        with_genres: id,
        with_watch_monetization_types: "flatrate",
      });
    } else {
      baseUrl += "genre/movie/list";

      params = new URLSearchParams({
        api_key: token,
        language: "pt-BR",
      });
    }

    fetch(`${baseUrl}?${params}`)
      .then((response) => response.json())
      .then((data) => {
        if (type == "discover") {
          setFilmes(data.results);
        } else {
          setGeneros(data.genres);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function filmeEscolhido(filme) {
    setFilmeDetalhes(filme);
    setOpen(true);
  }

  function formatarData(data) {
    const partes = data.split("-");
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
  }

  function getGeneros() {
    const data = [];

    if (generos.length == 0) {
      fetchData("gender", 0);
    } else {
      generos.forEach((g) => {
        data.push({ key: g.id, value: g.name });
      });
    }

    return data;
  }

  return (
    <View style={styles.flatList}>
      <Text style={styles.textInfo}>
        Escolha um gênero e veja os principais filmes do mesmo
      </Text>

      <View style={{ marginBottom: 20 }}>
        <SelectList
          placeholder="Selecione"
          setSelected={(id) => fetchData("discover", id)}
          data={getGeneros()}
          save="key"
          search={false}
        />
      </View>

      <View style={{ flex: 1 }}>
        <FlatList
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.flatListContent}
          data={filmes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.movies}>
              <View style={styles.movieBanner}>
                <Image
                  style={[
                    styles.imagem,
                    {
                      height: 120,
                      width: 120,
                    },
                  ]}
                  source={{
                    uri: "https://image.tmdb.org/t/p/w500" + item.poster_path,
                  }}
                />
              </View>
              <View style={styles.movieInfos}>
                <Text style={styles.movieTitle}>{item.title}</Text>

                <View style={styles.movieAvaliacao}>
                  <FontAwesome name="star" size={23} color="yellow" />
                  <Text style={styles.textMovieAvaliacao}>
                    {item.vote_average}/10
                  </Text>
                </View>

                <View style={styles.moreInfos}>
                  <TouchableOpacity
                    style={styles.btnMoreInfos}
                    onPress={() => {
                      filmeEscolhido(item);
                    }}
                  >
                    <AntDesign name="infocirlceo" size={24} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </View>

      {open ? (
        <Modal animationType="slide" transparent={true} visible={open}>
          <View style={styles.contentModal}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setOpen(false)}
            >
              <FontAwesome name="close" size={30} color="#000" />
            </TouchableOpacity>

            <View>
              <Text style={styles.modalTitle}>{filmeDetalhes.title}</Text>
              <Text style={styles.modalData}>
                Lançamento: {formatarData(filmeDetalhes.release_date)}
              </Text>
            </View>

            <Text style={styles.modalOverview}>{filmeDetalhes.overview}</Text>

            <Image
              style={[
                {
                  height: 280,
                  width: 280,
                  borderRadius: 5,
                  marginTop: 10,
                },
              ]}
              source={{
                uri:
                  "https://image.tmdb.org/t/p/w500" +
                  filmeDetalhes.backdrop_path,
              }}
            />
          </View>
        </Modal>
      ) : null}
    </View>
  );
}
