import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

// import { Container } from './styles';

const Home: React.FC = () => {
  
  const navigation = useNavigation()
  navigation.navigate('Home');
  
  return (
    <View>
      <Text>Home Testte</Text>
    </View>
  );
}

export default Home;