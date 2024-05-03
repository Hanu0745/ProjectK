import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import AllExponces from './pages/allExpences';
import RecentExpences from './pages/recentExpences';
import ManageExpences from './pages/manageExpences';
import Icon from './ui/icons';

import { GlobalStyles } from './globlstls/globalStyles';

import ExpanceProvider from './Store/expancesstore';

const Tab = createBottomTabNavigator();
const stack = createStackNavigator();

const ExpenceOverView = () => {

  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        // headerTintColor: 'white',
        headerTitleAlign: 'center',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.primary50,
        headerRight: () => (
          <Icon icc='add' color='black' size={24} onpress={() => navigation.navigate('Manageexpance')} />
        )
      })}
    >
      <Tab.Screen name='home' component={AllExponces}
        options={{
          title: 'All Expences',
          tabBarLabel: 'All Expences',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home' color={color} size={size} />
          )
        }}
      />
      <Tab.Screen name='data' component={RecentExpences}
        options={{
          title: 'Recent Expences',
          tabBarLabel: 'Recent Expences',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='planet' color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <>
      <ExpanceProvider>
        <NavigationContainer>
          <stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTitleAlign: 'center'
            }}
          >
            <stack.Screen name='expenceoverview' component={ExpenceOverView}
              options={{
                headerShown: false
              }}
            />
            <stack.Screen name='Manageexpance' component={ManageExpences}
              options={{
                presentation: 'modal'
              }}
            />
          </stack.Navigator>
        </NavigationContainer>
      </ExpanceProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
