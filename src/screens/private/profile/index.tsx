import * as React from 'react';
import {ReactNode} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {BottomTabStackScreenProps} from '../../../routes';
import {Dollar} from '../../../assets/svg/Dollar';

const Profile = (props: BottomTabStackScreenProps<'Profile'>): ReactNode => {
  const {navigation} = props;

  return (
    <View style={styles.content}>
      <Dollar height={50} width={50} />
      <Button
        title="Profile"
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

export default Profile;
