import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';

import PickupRequestRow from './components/PickupRequestRow';
import pickup_request from '../../data/pickup_request';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  welcome: {
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default ({ navigation }) => (
  <ScrollView style={styles.container}>
    <View style={styles.welcome}>
      <Text>Halo, Pak Heru</Text>
      <Text style={styles.title}>Permintaan Pickup</Text>
    </View>
    
    {/* Using array map so the title is scrolling. If the title needs to be stayed, uncomment FlatList below */}
    {pickup_request.map(item => <PickupRequestRow key={item.id} navigation={navigation} item={item} />)}

    {/* <FlatList
      data={pickup_request}
      keyExtractor={item => {
        return `${item.id}`;
      }}
      renderItem={({ item }) => <PickupRequestRow item={item} />}
    /> */}
  </ScrollView>
);