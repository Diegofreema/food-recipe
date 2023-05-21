import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect, useContext } from 'react';
import { MEALS } from '../assets/data/dummyData';
import MealDetail from '../components/MealDetail';
import SubTitle from '../components/SubTitle';
import List from '../components/List';
import Button from '../components/Button';
import FavoriteContext from '../context/FavoriteMeals';
const MealsDetails = ({ route, navigation }) => {
  const { id } = route.params;
  const favCtx = useContext(FavoriteContext);
  const isFav = favCtx.ids.includes(id);

  const currentMeal = MEALS.find((meal) => meal.id === id);
  const addMeals = (id) => {
    if (isFav) {
      favCtx.removeFavorite(id);
    } else {
      favCtx.addFavorite(id);
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          id={id}
          icon={isFav ? 'star' : 'star-outline'}
          onPress={addMeals.bind(this, id)}
        />
      ),
    });
  }, [navigation, addMeals]);
  return (
    <ScrollView
      style={{ paddingBottom: 15 }}
      showsVerticalScrollIndicator={false}
    >
      <Image style={styles.image} source={{ uri: currentMeal.imageUrl }} />
      <Text style={styles.title}>{currentMeal.title}</Text>
      <View style={{ width: '100%' }}>
        <MealDetail
          duration={currentMeal.duration}
          affordability={currentMeal.affordability}
          complexity={currentMeal.complexity}
          style={styles.detail}
        />
      </View>
      <View style={{ alignItems: 'center', paddingBottom: 20 }}>
        <View style={styles.maxWidth}>
          <SubTitle>Ingredients</SubTitle>
          <List data={currentMeal.ingredients} />
          <SubTitle>Steps</SubTitle>
          <List data={currentMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealsDetails;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detail: {
    color: 'white',
  },
  maxWidth: {
    width: '80%',
  },
});
