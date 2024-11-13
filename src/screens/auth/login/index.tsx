import * as React from 'react';
import { ReactNode } from 'react';
import { Button, StyleSheet, View } from 'react-native';

import { useRoute } from '@react-navigation/native';

import { RootStackScreenProps } from '../../../routes';

const Login = (props: RootStackScreenProps<'Login'>): ReactNode => {
  const { navigation } = props;

  const route = useRoute<any>();
  const { userId } = route.params || {};
  console.log(userId);
  return (
    <View style={styles.content}>
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

export default Login;
