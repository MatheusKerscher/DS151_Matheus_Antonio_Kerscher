import React from "react";
import { View } from "react-native";

import Title from "../Title";
import Form from "./Form/index";

export default function Imc() {
  return (
    <View>
      <Title titulo="IMC" />
      <Form />
    </View>
  );
}
