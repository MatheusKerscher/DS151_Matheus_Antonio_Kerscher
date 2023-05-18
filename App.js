import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Menu from "./src/components/Menu";
import Media from "./src/components/Media";
import Imc from "./src/components/Imc";
import ColorList from "./src/components/ColorList";
import ImgGenerator from "./src/components/ImgGenerator";
import Galerry from "./src/components/Galerry";
import Movies from "./src/components/Movies";
import Authentication from "./src/components/Authentication";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Calculo do IMC" component={Imc} />
        <Stack.Screen name="Calculo de Média" component={Media} />
        <Stack.Screen name="Gerar Cores" component={ColorList} />
        <Stack.Screen name="Gerar Imagem" component={ImgGenerator} />
        <Stack.Screen name="Galeria" component={Galerry} />
        <Stack.Screen name="Filmes" component={Movies} />
        <Stack.Screen name="Autenticação" component={Authentication} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
