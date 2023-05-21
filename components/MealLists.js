import { StyleSheet, FlatList, View } from 'react-native';
import React from 'react';
import MealItem from './MealItem';
const MealLists = ({ data }) => {
  const renderMeals = ({ item }) => {
    const mealsProps = {
      title: item.title,
      image: item.imageUrl,
      duration: item.duration,
      affordability: item.affordability,
      complexity: item.complexity,
      id: item.id,
    };
    return <MealItem {...mealsProps} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={renderMeals}
      />
    </View>
  );
};

export default MealLists;

const styles = StyleSheet.create({});
