import React, { useContext } from 'react';
import { Button, StyleSheet, View } from 'react-native';

import { AuthContext } from '../../contexts/auth';


const Login: React.FC = () => {
  const {login} = useContext(AuthContext)

  async function handleLogin() {
    await login()
    alert('logado com sucesso')
  }

  return (
    <View style={styles.container}>
      <Button title='Logi' onPress={handleLogin} ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Login;