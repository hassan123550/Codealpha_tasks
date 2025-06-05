import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SeminarsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🎤 Upcoming Seminars</Text>
      <Text style={styles.item}>• Digital Marketing Trends – June 15</Text>
      <Text style={styles.item}>• AI in Education – June 22</Text>
      <Text style={styles.item}>• Leadership & Innovation – July 1</Text>
    </View>
  );
};

export default SeminarsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 15, color: '#4B0082' },
  item: { fontSize: 16, marginBottom: 10,color:'#333' },
});
