import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import FavoriteContext from '../context/FavoriteMeals';
import { MEALS } from '../assets/data/dummyData';
import MealLists from '../components/MealLists';

const Favorite = () => {
  const favCtx = useContext(FavoriteContext);
  const FavoriteMeals = MEALS.filter((meal) => favCtx.ids.includes(meal.id));
  return <MealLists data={FavoriteMeals} />;
};

export default Favorite;

const styles = StyleSheet.create({});
