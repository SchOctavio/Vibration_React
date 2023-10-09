import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  Vibration,
  SafeAreaView,
} from "react-native";

export default function App() {
  const Separator = () => {
    return <View style={Platform.OS === "android" ? styles.separator : null} />;
  };
  const SEGUNDO = 1000;
  const PATRON = [1 * SEGUNDO, 2 * SEGUNDO, 2 * SEGUNDO, 1 * SEGUNDO];
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button title="Vibrar una vez" onPress={() => Vibration.vibrate()} />
      </View>

      <Separator />

      <View>
        <Button
          title="Vibrar por 5 segundos"
          onPress={() => Vibration.vibrate(5 * SEGUNDO)}
        />
      </View>
      <View>
        <Text style={styles.paragraph}>
          Patrón: esperar 1s, vibrar 2s, esperar 2s y vibrar 1s
        </Text>
        <Button
          title="Vibrar con patrón"
          onPress={() => Vibration.vibrate(PATRON)}
        />
      </View>
      <View>
      <Button
        title="Vibrar con patrón hasta que se cancele"
        onPress={() => Vibration.vibrate(PATRON, true)}
      />
      </View>
      <View>
        <Button
          title="Dejar de vibrar"
          onPress={() => Vibration.cancel()}
          color="#FF0000"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  paragraph: {
    margin: 24,
    textAlign: "center",
  },
});
