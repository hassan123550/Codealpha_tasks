import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NoticesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>📢 Important Notices</Text>
      <Text style={styles.item}>• College will remain closed on June 9.</Text>
      <Text style={styles.item}>• Submit assignments by June 13.</Text>
      <Text style={styles.item}>• Library hours extended till 8 PM.</Text>
    </View>
  );
};

export default NoticesScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 15, color: '#4B0082' },
  item: { fontSize: 16, marginBottom: 10,color:'#333'},
});
