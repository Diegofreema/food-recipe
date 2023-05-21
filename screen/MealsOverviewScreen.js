import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState, useLayoutEffect } from 'react';
import { CATEGORIES, MEALS } from '../assets/data/dummyData';
import MealItem from '../components/MealItem';

const MealsOverviewScreen = ({ route, navigation }) => {
  const [meals, setMeals] = useState(MEALS);
  const catId = route.params.id;
  const title = route.params.title;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, [title]);
  console.log(catId);

  const matchedMeals = meals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={matchedMeals}
        renderItem={({ item }) => <MealItem title={item.title} />}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
