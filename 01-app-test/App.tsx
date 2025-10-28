import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native'; 
import FAB from './components/FAB';

export default function App(){
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState<number[]>([]); 

  const handleIncrement = () => {
    if (count < 20) {
      const newCount = count + 1;
      setCount(newCount);
      setHistory((prev) => [newCount, ...prev]);
    }
  };

  const handleReset = () => {
    if (count !== 0) {
      setCount(0);
      setHistory((prev) => [0, ...prev]);
  }
  };

  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <Text style={styles.textHuge}>{count}</Text>
      </View>
      
      <View style={styles.historyBox}>
        <Text style={styles.historyTitle}>Historial:</Text>
        <FlatList
          data={history}
          renderItem={({ item }: { item: number }) => (
            <Text style={styles.historyItem}>{item}</Text>
          )}
          keyExtractor={(_, i) => i.toString()}
        />
      </View>

      <FAB
        label="+1"
        onPress={handleIncrement}
        onLongPress={() => setCount(0)}
        position="right"
      />

      <FAB
        label="0"
        onPress={handleReset}
        onLongPress={handleReset}
        position="left"
      />

      
      <View style={styles.historyBox}>
        <Text style={styles.historyTitle}>Historial:</Text>
        <FlatList
          data={history}
          renderItem={({ item }: { item: number }) => (
            <Text style={styles.historyItem}>{item}</Text>
          )}
          keyExtractor={(_, i) => i.toString()}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a5d82ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // 🔹 Contenedor centrado del número
  counterContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  textHuge: {
    fontSize: 120,
    fontWeight: 'bold',
    color: '#11455cff',
    textAlign: 'center',
  },
  // 🔹 Tus estilos originales sin tocar
  floattingButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#007AFF',
    borderRadius: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 3,
  },
  positionRight: {
    right: 20,
  },
  positionLeft: {
    left: 20,
  },
  // 🔹 Cuadro del historial
  historyBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 15,
    borderRadius: 15,
    width: '80%',
    maxHeight: 250,
    marginBottom: 100,
    alignItems: 'center',
  },
  historyTitle: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  historyItem: {
    color: 'white',
    fontSize: 16,
  },
});