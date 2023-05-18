import React from "react";
import { View } from "react-native";
import Authenticated from "./Authenticated";
import Title from "../Title";

export default function Authentication() {
  return (
    <View>
      <Title titulo="Autenticação" />

      <Authenticated />
    </View>
  );
}