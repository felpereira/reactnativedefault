import * as React from 'react';
import {ReactNode} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {BottomTabStackScreenProps} from '../../../routes';

const Notifications = (
  props: BottomTabStackScreenProps<'Notifications'>,
): ReactNode => {
  const {navigation} = props;

  return (
    <View style={styles.content}>
      <Button
        title="Notifications"
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

export default Notifications;
