import {
  Image,
  Pressable,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import MealDetail from './MealDetail';
const MealItem = ({
  title,
  image,
  affordability,
  complexity,
  duration,
  id,
}) => {
  const navigation = useNavigation();
  const navigationHandler = () => {
    navigation.navigate('Details', { id });
  };
  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={navigationHandler}
      >
        <View style={styles.inner}>
          <View>
            <Image style={styles.image} source={{ uri: image }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetail
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  inner: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },

  pressed: {
    opacity: 0.75,
  },
});
