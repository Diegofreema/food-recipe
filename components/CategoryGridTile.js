import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  Platform,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');
const CategoryGridTile = ({ title, color, id }) => {
  const navigation = useNavigation();
  const navigationHandler = () => {
    navigation.navigate('Meals', {
      id,
      title,
    });
  };
  return (
    <Pressable
      style={({ pressed }) => [pressed && styles.pressed, styles.titleCon]}
      onPress={navigationHandler}
    >
      <View style={[styles.container, { backgroundColor: color }]}>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  titleCon: {
    flex: 1,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    margin: 16,
    height: 150,
    width: width,
    borderRadius: 8,
    elevation: 4,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  pressed: {
    opacity: 0.5,
  },
});
