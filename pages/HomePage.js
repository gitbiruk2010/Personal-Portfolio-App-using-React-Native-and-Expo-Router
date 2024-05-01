import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigate } from 'react-router-native';
import { MaterialIcons } from '@expo/vector-icons';
import NavBar from './NavBar'; // importing navbar component

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/profile.jpg')} style={styles.profilePic} />
      <Text style={styles.title}>Welcome to My Portfolio</Text>
      <Text style={styles.paragraph}>My name is Biruk and this is a school project on mobile app development.</Text>
      
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5c80bd',
  },
  title: {
    fontSize: 26,
    color: '#fff',
    marginBottom: 20,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },

});
