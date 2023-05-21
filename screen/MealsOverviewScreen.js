import { StyleSheet } from 'react-native';
import React, { useState, useLayoutEffect } from 'react';
import { MEALS } from '../assets/data/dummyData';
import MealLists from '../components/MealLists';

const MealsOverviewScreen = ({ route, navigation }) => {
  const [meals, setMeals] = useState(MEALS);
  const catId = route.params.id;
  const title = route.params.title;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, [title, navigation]);

  const matchedMeals = meals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealLists data={matchedMeals} />;
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
