import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import { CATEGORIES } from '../assets/data/dummyData';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoryScreen = ({ navigation }) => {
  const [categories, setCategories] = useState(CATEGORIES);
  return (
    <FlatList
      numColumns={2}
      data={categories}
      renderItem={({ item }) => (
        <CategoryGridTile title={item.title} id={item.id} color={item.color} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({});
