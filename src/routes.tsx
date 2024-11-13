import * as React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
} from 'react-native';

import type { StackScreenProps } from '@react-navigation/stack';

import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  HeaderBackButtonProps,
  HeaderTitleProps,
} from '@react-navigation/elements';
import {
  CompositeScreenProps,
  LinkingOptions,
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ArrowLeft } from './assets/svg/ArrowLeft';
import { Bell } from './assets/svg/Bell';
import { House } from './assets/svg/House';
import { Logo } from './assets/svg/Logo';
import { Search } from './assets/svg/Search';
import { UserCircle } from './assets/svg/UserCircle';
import Login from './screens/auth/login';
import Home from './screens/private/home';
import Notifications from './screens/private/notifications';
import Profile from './screens/private/profile';

const colorNeutral600 = '#545B66';
const neutralDark = '#                             ';

const colorInterface500 = '#107F9D';
const white = '#FFFFFF';

//#region "Rotas Principais"

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
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
      props: {
        canGoBack?: boolean;
      } & HeaderBackButtonProps,
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
        style={[
          { color: props.tintColor },
          props.style as StyleProp<TextStyle>,
        ]}>
        {props.children}
      </Text>
    );
  }, []);

  const headerSecondary = React.useMemo(
    () => ({
      headerLeft: headerLeftSecondary,
      headerRight: undefined,
      headerTintColor: neutralDark,
      headerTitle: headerTitleSecondary,
      headerTitleStyle: { fontFamily: 'Montserrat-SemiBold', fontSize: 16 },
      title: 'Notificações',
    }),
    [headerLeftSecondary, headerTitleSecondary],
  );

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'red' },
      }}>
      <Stack.Screen
        component={BottomTabNavigatorStack}
        name="TabBarItens"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Login}
        name="Login"
        options={{
          ...headerSecondary,
        }}
      />
      <Stack.Screen
        component={Home}
        name="Home"
        options={{ headerStyle: { backgroundColor: 'blue' } }}
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
      color: string;
      focused: boolean;
      size: number;
    }): React.ReactNode => {
      return (
        <Search height={props.size} stroke={props.color} width={props.size} />
      );
    },
    [],
  );

  const tabBar1Icon = React.useCallback(
    (props: {
      color: string;
      focused: boolean;
      size: number;
    }): React.ReactNode => {
      return (
        <House height={props.size} stroke={props.color} width={props.size} />
      );
    },
    [],
  );

  const tabBar3Icon = React.useCallback(
    (props: {
      color: string;
      focused: boolean;
      size: number;
    }): React.ReactNode => {
      return (
        <Bell height={props.size} stroke={props.color} width={props.size} />
      );
    },
    [],
  );

  const tabBarLabelStyle = React.useCallback(
    (props: {
      children: string;
      color: string;
      focused: boolean;
      position: 'below-icon' | 'beside-icon';
    }) => {
      return (
        <Text style={styles(props).tabBarLabelStyle}>{props.children}</Text>
      );
    },
    [],
  );

  const tabBarStyleDefault = React.useMemo(() => {
    return {
      tabBarActiveBackgroundColor: white,
      tabBarActiveTintColor: colorInterface500,
      tabBarInactiveBackgroundColor: white,
      tabBarInactiveTintColor: colorNeutral600,
      tabBarItemStyle: stylesDefault.tabBarItemStyle,
      tabBarLabel: tabBarLabelStyle,
      tabBarStyle: stylesDefault.tabBarStyle,
    };
  }, [tabBarLabelStyle]);

  const headerLeft = React.useCallback(
    (
      _props: {
        canGoBack?: boolean;
      } & HeaderBackButtonProps,
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
    (_props: {
      canGoBack: boolean;
      pressColor?: string;
      pressOpacity?: number;
      tintColor?: string;
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
      headerLeft: headerLeft,
      headerLeftContainerStyle: stylesDefault.headerLeftContainerStyle,
      headerRight: headerRight,
      headerRightContainerStyle: stylesDefault.headerRightContainerStyle,
      headerStyle: stylesDefault.headerStyle,
      headerTitle: '',
    }),
    [headerLeft, headerRight],
  );

  const headerLeftSecondary = React.useCallback(
    (
      props: {
        canGoBack?: boolean;
      } & HeaderBackButtonProps,
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
        style={[
          { color: props.tintColor },
          props.style as StyleProp<TextStyle>,
        ]}>
        {props.children}
      </Text>
    );
  }, []);

  const headerSecondary = React.useCallback(
    (navigation: NotificationsScreenNavigationProp) => {
      console.log(navigation);

      return {
        headerLeft: props => headerLeftSecondary(props, navigation),
        headerRight: undefined,
        headerTintColor: neutralDark,
        headerTitle: headerTitleSecondary,
        headerTitleStyle: { fontFamily: 'Montserrat-SemiBold', fontSize: 16 },
        title: 'Notificações',
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
        component={Home}
        name="Home"
        options={{ tabBarIcon: tabBar1Icon }}
      />
      <BottomTabNavigator.Screen
        component={Profile}
        name="Profile"
        options={{ tabBarIcon: tabBar2Icon }}
      />
      <BottomTabNavigator.Screen
        component={Notifications}
        name="Notifications"
        options={({ navigation }) => ({
          ...headerSecondary(navigation),
          tabBarIcon: tabBar3Icon,
        })}
      />
    </BottomTabNavigator.Navigator>
  );
}

//#endregion "Bottom Navigation"

const linkingOption: LinkingOptions<RootStackParamList> = {
  config: {
    screens: {
      Home: `home`,
      Login: { parse: { userId: (id: string) => Number(id) }, path: `login` },
    },
  },
  prefixes: ['myapp://', 'https://myapp.com'],
};

export default function App() {
  return (
    <NavigationContainer linking={linkingOption}>
      <RootStack />
    </NavigationContainer>
  );
}

const styles = (props: {
  children: string;
  color: string;
  focused: boolean;
  position: 'below-icon' | 'beside-icon';
}) =>
  StyleSheet.create({
    tabBarLabelStyle: {
      color: props.color,
      fontFamily: props.focused ? 'Montserrat-SemiBold' : 'Montserrat-Medium',
      fontSize: 12,
    },
  });

const stylesDefault = StyleSheet.create({
  headerLeftContainerStyle: {
    marginStart: 16,
  },
  headerRightContainerStyle: {
    marginEnd: 16,
  },
  headerStyle: { backgroundColor: white, minHeight: 64 },
  tabBarItemStyle: {
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  tabBarStyle: {
    height: 64,
  },
});
