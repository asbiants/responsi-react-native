import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const Callapi = () => {
  const jsonUrl =
    'https://script.google.com/macros/s/AKfycbz5JHMuJZ-YPaUJ9oFh-OwnrV-Epz7TzlaMcGbg0ZMcujwimZatMIIdWMUgnwtsj1Bz/exec';
  const [isLoading, setLoading] = useState(true);
  const [dataUser, setDataUser] = useState({});
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch(jsonUrl)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDataUser(json);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function refreshPage() {
    fetch(jsonUrl)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDataUser(json);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }
  const handleDelete = id => {
    // Implement delete logic here
    // Remove the item from the dataUser array
    const updatedDataUser = dataUser.filter(item => item.id !== id);
    setDataUser(updatedDataUser);
  };

  return (
    <SafeAreaView>
      {isLoading ? (
        <View>
          <Text>Loading Data</Text>
        </View>
      ) : (
        <View style={styles.backgroundfull}>
          <Text style={styles.judul}>Kegiatan</Text>
          <FlatList
            data={dataUser}
            onRefresh={() => {
              refreshPage();
            }}
            refreshing={refresh}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <View style={styles.card}>
                <View>
                  <Text style={styles.cardtitle}>{item.nama}</Text>
                  <Text style={styles.fontregular}>{item.deskripsi}</Text>
                  <Text style={styles.fontregular}>
                    {item.latitude + ', ' + item.longitude}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
export default Callapi;
const styles = StyleSheet.create({
  judul: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 35,
    color: 'black',
  },
  backgroundfull: {
    backgroundColor: Colors.orange1,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  title: {
    paddingVertical: 12,
    backgroundColor: '#333',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  avatar: {
    borderRadius: 100,
    width: 80,
  },
  fontregular: {
    color: '#000000',
  },
  cardtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
  },
  card: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ECF4D6',
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 5,
    shadowRadius: 1.41,
    elevation: 2,
    marginHorizontal: 20,
    marginVertical: 7,
  },
  deleteButton: {
    backgroundColor: '#F44336',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
