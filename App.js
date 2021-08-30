import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Foundation, Feather, Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import MessageScreen from './screens/MessageScreen';
import PictureProfile from './components/PictureProfile';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const Tab = createBottomTabNavigator();

export default function App() {


  return (
    <NavigationContainer style={{}}>
      <StatusBar animated={true} backgroundColor="#fff" barStyle="dark-content" />
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route, navigation }) => ({
          tabBarStyle: {
            backgroundColor: '#212121', borderTopWidth: 0,
            maxHeight: 50, justifyContent: 'center',
            alignContent: 'center', flex: 1
          },
          tabBarLabel: '',

          style: styles.app,
          tabBarIcon: ({ focused }) => {
            let iconName;
            let taille;
            let couleur;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
              taille = focused ? 26 : 24;
              couleur = focused ? 'white' : 'grey';
              return <Foundation name={iconName} size={taille} color={couleur} />;
            } else {
              iconName = focused ? 'message-square' : 'message-square';
              taille = focused ? 26 : 24;
              couleur = focused ? 'white' : 'grey';
              return <Feather name={iconName} size={taille} color={couleur} />;
            }

          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            flex: 1,
            textAlign: "center",
            color: 'white'
          },
          headerStyle: {
            borderBottomWidth: 0,
            backgroundColor: 'black',
            height: 50 + Math.round(getStatusBarHeight()),

          },
          headerTitle: () => {
            if (route.name === 'Home') {
              return <Text style={{
                textAlign: "center", color: 'white', alignContent: 'center', flex: 1, fontWeight: 'bold',
                color: 'white',
                fontSize: 24,
                marginTop: Math.round((50 + Math.round(getStatusBarHeight())) / 6)
              }}> Feed</Text>
            } else {
              <Text style={{
                textAlign: "center", justifyContent: 'center', flex: 1, fontWeight: 'bold',
                color: 'white',
                fontSize: 24,
              }} > </Text>
            }
          },
          headerLeft: () => (

            <PictureProfile />
          ),
          headerRight: () => (
            <View style={{ marginRight: 5, maxWidth: 150 }}>
              <Ionicons name="options-outline" onPress={() => alert('This is a button!')} size={24} color="white" />
            </View>
          ),
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{

        }}
        />
        <Tab.Screen name="Message" component={MessageScreen} options={{}} />
      </Tab.Navigator>

    </NavigationContainer>

  );
}


const styles = StyleSheet.create({
  app: {},

})
