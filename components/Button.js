import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const Button = ({ id, icon, onPress }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteHandler = () => {
    setIsFavorite((prev) => !prev);
  };
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <Ionicons name={icon} size={24} color="gold" />
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
