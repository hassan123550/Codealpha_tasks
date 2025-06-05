import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

const CollegeAlertScreen = ({ navigation }) => {
  const menuItems = [
    { label: 'Seminars', icon: 'presentation', screen: 'Seminars' },
    { label: 'Exams', icon: 'calendar-check', screen: 'Exams' },
    { label: 'Fests', icon: 'calendar-star', screen: 'Fests' },
    { label: 'Notices', icon: 'alert-circle-outline', screen: 'Notices' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🎓 College Alerts</Text>
        <Icon name="bell-ring-outline" size={28} color="#fff" />
      </View>

      <ScrollView contentContainerStyle={styles.grid}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Icon name={item.icon} size={40} color="#4B0082" />
            <Text style={styles.cardText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.footer}>@Created Design By Hassan Ali</Text>
    </View>
  );
};

export default CollegeAlertScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b0e0e6',
  },
  header: {
    backgroundColor: '#7b68ee',
    paddingVertical: 24,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 8,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  card: {
    width: width * 0.4,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 30,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  cardText: {
    fontSize: 16,
    color: '#4B0082',
    fontWeight: '600',
    marginTop: 10,
    textAlign: 'center',
  },
  footer: {
    textAlign: 'center',
    color: '#333',
    fontSize: 14,
    marginBottom: 15,
    marginTop: 10,
  },
});
