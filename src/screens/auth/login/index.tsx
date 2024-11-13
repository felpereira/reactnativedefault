import * as React from 'react';
import {ReactNode} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {RootStackScreenProps} from '../../../routes';

const Login = (props: RootStackScreenProps<'Login'>): ReactNode => {
  const {navigation} = props;

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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});

export default Login;
