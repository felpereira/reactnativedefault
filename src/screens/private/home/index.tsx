import * as React from 'react';
import {ReactNode} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {BottomTabStackScreenProps} from '../../../routes';

const Home = (props: BottomTabStackScreenProps<'Home'>): ReactNode => {
  const {navigation} = props;

  return (
    <View style={styles.content}>
      <Button
        title="Privado"
        onPress={() => {
          navigation.navigate('Login');
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

export default Home;
