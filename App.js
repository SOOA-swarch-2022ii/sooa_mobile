import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.texto1}>Sooa Mobile</Text>
      <Button title="log in" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9a002',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto1:{
    Color: '#fff',
  }
});
