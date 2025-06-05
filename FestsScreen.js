import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FestsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🎉 Upcoming Fests</Text>
      <Text style={styles.item}>• TechFest – July 5</Text>
      <Text style={styles.item}>• Cultural Day – July 15</Text>
      <Text style={styles.item}>• Sports Meet – July 25</Text>
    </View>
  );
};

export default FestsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 15, color: '#4B0082' },
  item: { fontSize: 16, marginBottom: 10,color:'#333'},
});
