import { View } from "react-native";
import GalerryList from "./GalerryList";
import Title from "../Title";

export default function Galerry() {
  return (
    <View>
      <Title titulo="Galeria" />

      <GalerryList />
    </View>
  );
}
