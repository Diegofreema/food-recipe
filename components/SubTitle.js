import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SubTitle = ({ children }) => {
  return (
    <View style={styles.borderStyle}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default SubTitle;

const styles = StyleSheet.create({
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',

    textAlign: 'center',
  },
  borderStyle: {
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
  },
});
