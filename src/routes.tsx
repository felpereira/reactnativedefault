import * as React from 'react';

import {
  CompositeScreenProps,
  NavigationContainer,
  NavigatorScreenParams,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {StackScreenProps} from '@react-navigation/stack';
import Login from './screens/auth/login';
import Home from './screens/private/home';
import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Notifications from './screens/private/notifications';
import Profile from './screens/private/profile';

import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
} from 'react-native';

import {House} from './assets/svg/House';
import {Search} from './assets/svg/Search';
import {Bell} from './assets/svg/Bell';
import {Logo} from './assets/svg/Logo';
import {UserCircle} from './assets/svg/UserCircle';
import {
  HeaderBackButtonProps,
  HeaderTitleProps,
} from '@react-navigation/elements';
import {ArrowLeft} from './assets/svg/ArrowLeft';

const colorNeutral600 = '#545B66';
const neutralDark = '#                             ';

const colorInterface500 = '#107F9D';
const white = '#FFFFFF';

//#region "Rotas Principais"

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  TabBarItens: NavigatorScreenParams<BottomTabStackParamList>;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

type NotificationsScreenNavigationProp = BottomTabNavigationProp<
  BottomTabStackParamList,
  'Notifications'
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  const headerLeftSecondary = React.useCallback(
    (
      props: HeaderBackButtonProps & {
        canGoBack?: boolean;
      },
    ) => {
      console.log(props);
      return (
        <TouchableOpacity
          onPress={() => {
            console.log(props);
          }}>
          <ArrowLeft />
        </TouchableOpacity>
      );
    },
    [],
  );

  const headerTitleSecondary = React.useCallback((props: HeaderTitleProps) => {
    return (
      <Text
        style={[{color: props.tintColor}, props.style as StyleProp<TextStyle>]}>
        {props.children}
      </Text>
    );
  }, []);

  const headerSecondary = React.useMemo(
    () => ({
      headerLeft: headerLeftSecondary,
      title: 'Notificações',
      headerTitle: headerTitleSecondary,
      headerTintColor: neutralDark,
      headerTitleStyle: {fontFamily: 'Montserrat-SemiBold', fontSize: 16},
      headerRight: undefined,
    }),
    [headerLeftSecondary, headerTitleSecondary],
  );

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'red'},
      }}>
      <Stack.Screen
        name="TabBarItens"
        component={BottomTabNavigatorStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          ...headerSecondary,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerStyle: {backgroundColor: 'blue'}}}
      />
    </Stack.Navigator>
  );
}

//#endregion "Rotas Principais"

//#region "Bottom Navigation"

type BottomTabStackParamList = {
  Home: undefined;
  Notifications: undefined;
  Profile: undefined;
};

export type BottomTabStackScreenProps<T extends keyof BottomTabStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

const BottomTabNavigator = createBottomTabNavigator<BottomTabStackParamList>();

function BottomTabNavigatorStack() {
  const tabBar2Icon = React.useCallback(
    (props: {
      focused: boolean;
      color: string;
      size: number;
    }): React.ReactNode => {
      return (
        <Search height={props.size} width={props.size} stroke={props.color} />
      );
    },
    [],
  );

  const tabBar1Icon = React.useCallback(
    (props: {
      focused: boolean;
      color: string;
      size: number;
    }): React.ReactNode => {
      return (
        <House height={props.size} width={props.size} stroke={props.color} />
      );
    },
    [],
  );

  const tabBar3Icon = React.useCallback(
    (props: {
      focused: boolean;
      color: string;
      size: number;
    }): React.ReactNode => {
      return (
        <Bell height={props.size} width={props.size} stroke={props.color} />
      );
    },
    [],
  );

  const tabBarLabelStyle = React.useCallback(
    (props: {
      focused: boolean;
      color: string;
      position: 'beside-icon' | 'below-icon';
      children: string;
    }) => {
      return (
        <Text style={styles(props).tabBarLabelStyle}>{props.children}</Text>
      );
    },
    [],
  );

  const tabBarStyleDefault = React.useMemo(() => {
    return {
      tabBarInactiveTintColor: colorNeutral600,
      tabBarActiveBackgroundColor: white,
      tabBarInactiveBackgroundColor: white,
      tabBarActiveTintColor: colorInterface500,
      tabBarLabel: tabBarLabelStyle,
      tabBarStyle: stylesDefault.tabBarStyle,
      tabBarItemStyle: stylesDefault.tabBarItemStyle,
    };
  }, [tabBarLabelStyle]);

  const headerLeft = React.useCallback(
    (
      props: HeaderBackButtonProps & {
        canGoBack?: boolean;
      },
    ) => {
      return (
        <TouchableOpacity>
          <Logo />
        </TouchableOpacity>
      );
    },
    [],
  );

  const headerRight = React.useCallback(
    (props: {
      tintColor?: string;
      pressColor?: string;
      pressOpacity?: number;
      canGoBack: boolean;
    }) => {
      return (
        <TouchableOpacity>
          <UserCircle />
        </TouchableOpacity>
      );
    },
    [],
  );

  const headerDefault = React.useMemo(
    () => ({
      headerStyle: stylesDefault.headerStyle,
      headerLeftContainerStyle: stylesDefault.headerLeftContainerStyle,
      headerRightContainerStyle: stylesDefault.headerRightContainerStyle,
      headerLeft: headerLeft,
      headerRight: headerRight,
      headerTitle: '',
    }),
    [headerLeft, headerRight],
  );

  const headerLeftSecondary = React.useCallback(
    (
      props: HeaderBackButtonProps & {
        canGoBack?: boolean;
      },
      navigation: NotificationsScreenNavigationProp,
    ) => {
      return (
        <TouchableOpacity
          {...props}
          onPress={() => {
            console.log(navigation);
            navigation.goBack();
          }}>
          <ArrowLeft />
        </TouchableOpacity>
      );
    },
    [],
  );

  const headerTitleSecondary = React.useCallback((props: HeaderTitleProps) => {
    return (
      <Text
        style={[{color: props.tintColor}, props.style as StyleProp<TextStyle>]}>
        {props.children}
      </Text>
    );
  }, []);

  const headerSecondary = React.useCallback(
    (navigation: NotificationsScreenNavigationProp) => {
      console.log(navigation);

      return {
        headerLeft: props => headerLeftSecondary(props, navigation),
        title: 'Notificações',
        headerTitle: headerTitleSecondary,
        headerTintColor: neutralDark,
        headerTitleStyle: {fontFamily: 'Montserrat-SemiBold', fontSize: 16},
        headerRight: undefined,
      };
    },
    [headerLeftSecondary, headerTitleSecondary],
  );

  return (
    <BottomTabNavigator.Navigator
      screenOptions={{
        headerShown: true,
        ...headerDefault,
        ...tabBarStyleDefault,
      }}>
      <BottomTabNavigator.Screen
        name="Home"
        component={Home}
        options={{tabBarIcon: tabBar1Icon}}
      />
      <BottomTabNavigator.Screen
        name="Profile"
        component={Profile}
        options={{tabBarIcon: tabBar2Icon}}
      />
      <BottomTabNavigator.Screen
        name="Notifications"
        component={Notifications}
        options={({navigation}) => ({
          ...headerSecondary(navigation),
          tabBarIcon: tabBar3Icon,
        })}
      />
    </BottomTabNavigator.Navigator>
  );
}

//#endregion "Bottom Navigation"

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

const styles = (props: {
  focused: boolean;
  color: string;
  position: 'beside-icon' | 'below-icon';
  children: string;
}) =>
  StyleSheet.create({
    tabBarLabelStyle: {
      fontSize: 12,
      color: props.color,
      fontFamily: props.focused ? 'Montserrat-SemiBold' : 'Montserrat-Medium',
    },
  });

const stylesDefault = StyleSheet.create({
  tabBarStyle: {
    height: 64,
  },
  tabBarItemStyle: {
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  headerStyle: {backgroundColor: white, minHeight: 64},
  headerLeftContainerStyle: {
    marginStart: 16,
  },
  headerRightContainerStyle: {
    marginEnd: 16,
  },
});
