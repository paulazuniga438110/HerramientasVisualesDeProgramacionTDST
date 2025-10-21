import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

interface Props {
  label: string;
  position?: "left" | "right";
  // Actions
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function FAB({
   label,
   onPress,
   onLongPress,
   position = "right",
}: Props) {

  return (
    <Pressable 
  style={({ pressed }) => [
    styles.floattingButton,
    position === "right" ? styles.positionRight : styles.positionLeft,
    pressed ? { opacity: 0.7 } : { opacity: 1 },
  ]}
  onPress={onPress}
  onLongPress={onLongPress}
>
  <Text style={{ color: "white", fontSize: 20 }}>{label}</Text>
  <Text>FAB</Text>
</Pressable>
  )
}

const styles = StyleSheet.create({
  floattingButton: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "#007AFF",
    borderRadius: 15,
    padding: 10,
    shadowColor: "#000",
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
});
