import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import {WebView} from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';

const Tab = createBottomTabNavigator();
const webmap = require('../peta/map.html');

function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.listitems}>
        <Image
          source={require('../peta/peta1.jpg')}
          style={styles.image}></Image>
        <Text style={styles.caption}>Peta Penggunaan Lahan</Text>
      </View>
      <View style={styles.listitems}>
        <Image
          source={require('../peta/peta1.jpg')}
          style={styles.image}></Image>
        <Text style={styles.caption}>Peta Penggunaan Lahan</Text>
      </View>
      <View style={styles.listitems}>
        <Image
          source={require('../peta/peta1.jpg')}
          style={styles.image}></Image>
        <Text style={styles.caption}>Peta Penggunaan Lahan</Text>
      </View>
      <View style={styles.listitems}>
        <Image
          source={require('../peta/peta1.jpg')}
          style={styles.image}></Image>
        <Text style={styles.caption}>Peta Penggunaan Lahan</Text>
      </View>
    </ScrollView>
  );
}
function SettingsScreen() {
  return <WebView source={webmap} />;
}
function ProfileScreen() {
  return (
    <View>
      <Portofolio />
    </View>
  );
}
function MahasiswaScreen() {
  return (
    <View>
      <Getjsonfile />
    </View>
  );
}

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Map',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="map-marked-alt" color={color} size={size} />
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
        <Tab.Screen
          name="Mahasiswa"
          component={MahasiswaScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="users" color={color} size={size} />
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
    width: 400,
    height: 600,
    resizeMode: 'stretch',
  },
  listitems: {
    padding: 20,
    alignItems: 'center',
  },
  caption: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
