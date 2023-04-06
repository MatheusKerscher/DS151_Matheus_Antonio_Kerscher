import React from "react";
import { View } from "react-native";
import Title from "../Title";
import List from "./List";

export default function ColorList() {
  return (
    <View>
      <Title titulo="Gerador de Cores" />

      <List />
    </View>
  );
}
