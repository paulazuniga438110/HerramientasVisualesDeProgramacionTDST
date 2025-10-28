import { useState } from 'react';
import { Alert } from 'react-native';

export const useCounter = () => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState<number[]>([0]);

  // Actualiza el historial
  const updateHistory = (value: number) => {
    setHistory(prev => [...prev, value]);
  };

  // Aumenta sin pasar de 20
  const increase = () => {
    setCount(prev => {
      const next = Math.min(prev + 1, 20);
      updateHistory(next);
      return next;
    });
  };

  // Reinicia el contador
  const reset = () => {
    setCount(0);
    updateHistory(0);
  };

  //  Al hacer long press, muestra confirmación
  const confirmReset = () => {
    Alert.alert(
      'Reiniciar contador',
      '¿Seguro que deseas reiniciar el contador?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sí, reiniciar', onPress: reset },
      ]
    );
  };

  return {
    count,
    increase,
    reset,
    confirmReset,
    history,
  };
};
