import { View } from "react-native";

import Title from "../Title";
import MoviesList from "./MoviesList";

export default function Movies() {
  return (
    <View>
      <Title titulo="Filmes" />

      <MoviesList />
    </View>
  );
}
