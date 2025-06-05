import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExamsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>📝 Upcoming Exams</Text>
      <Text style={styles.item}>• Computer Science – June 10</Text>
      <Text style={styles.item}>• Mathematics – June 12</Text>
      <Text style={styles.item}>• Physics – June 14</Text>
    </View>
  );
};

export default ExamsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 15, color: '#4B0082' },
  item: { fontSize: 16, marginBottom: 10,color:'#333' },
});
