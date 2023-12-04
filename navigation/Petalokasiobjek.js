import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import Callapi from '../Callapi';
import {WebView} from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';

const Tab = createBottomTabNavigator();
const webmap = require('../peta/map.html');

//Form input dari github pages
const forminput = 'https://asbiants.github.io/pgpbl_responsi/';

//Peta web dari gituhub pages
const petaweb = 'https://asbiants.github.io/pgpbl_responsi/map.html';

function MapScreen() {
  return <WebView source={{uri: petaweb}} />;
}

function AddDataScreen() {
  return <WebView source={{uri: forminput}} />;
}
function ProfileScreen() {
  return (
    <View>
      <Portofolio />
    </View>
  );
}

function TodoList() {
  return (
    <View>
      <Callapi />
    </View>
  );
}

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Kegiatan"
          component={TodoList}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="igloo" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarLabel: 'Map',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="map-marked-alt" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Add Data"
          component={AddDataScreen}
          options={{
            tabBarLabel: 'Add Data',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="plus-square" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="user-circle" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;

const styles = StyleSheet.create({
  image: {
    width: 345,
    height: 245,
    resizeMode: 'stretch',
  },
  listitems: {
    padding: 20,
    alignItems: 'center',
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'serif',
    textAlign: 'center',
    marginTop: 10,
  },
});
